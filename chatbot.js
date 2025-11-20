// AI Chatbot for Government Portal Directory
// Uses Google Gemini API for intelligent responses with streaming

// CONFIGURATION: Add your Gemini API key here
// Get free API key from: https://makersuite.google.com/app/apikey
const GEMINI_API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_STREAM_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:streamGenerateContent';

// Fallback keyword matching for offline mode
const chatbotKeywords = {
    // Education related
    'education': ['education-scholarships', 'education-entrance', 'education-skill', 'education-online'],
    'scholarship': ['education-scholarships'],
    'study': ['education-scholarships', 'education-online'],
    'exam': ['education-entrance'],
    'neet': ['education-entrance'],
    'jee': ['education-entrance'],
    'skill': ['education-skill'],
    'training': ['education-skill'],
    'course': ['education-online'],
    
    // Employment related
    'job': ['employment-jobs'],
    'employment': ['employment-jobs', 'employment-epfo'],
    'work': ['employment-jobs'],
    'epfo': ['employment-epfo'],
    'provident': ['employment-epfo'],
    'esic': ['employment-epfo'],
    
    // Business related
    'business': ['business-startup', 'business-msme'],
    'startup': ['business-startup'],
    'entrepreneur': ['business-startup', 'business-msme'],
    'msme': ['business-msme'],
    'loan': ['business-startup', 'farmer-credit'],
    
    // Farmer related
    'farmer': ['farmer-income', 'farmer-credit', 'farmer-insurance', 'farmer-market'],
    'agriculture': ['farmer-income', 'farmer-credit', 'farmer-insurance', 'farmer-market'],
    'crop': ['farmer-insurance', 'farmer-market'],
    'kisan': ['farmer-income', 'farmer-credit'],
    
    // Identity documents
    'aadhaar': ['id-aadhaar'],
    'pan': ['id-pan'],
    'voter': ['id-voter'],
    'passport': ['id-passport'],
    'driving': ['id-driving'],
    'license': ['id-driving'],
    
    // Welfare
    'health': ['welfare-health'],
    'pension': ['welfare-pension'],
    'women': ['welfare-women'],
    'welfare': ['welfare-health', 'welfare-pension', 'welfare-women'],
    
    // Karnataka specific
    'electricity': ['karnataka-electricity'],
    'bescom': ['karnataka-electricity'],
    'transport': ['karnataka-transport'],
    'bus': ['karnataka-transport'],
    'land': ['karnataka-land'],
    'bhoomi': ['karnataka-land'],
    
    // Defense
    'army': ['defense-army'],
    'navy': ['defense-navy'],
    'airforce': ['defense-airforce'],
    'defense': ['defense-army', 'defense-navy', 'defense-airforce', 'defense-welfare'],
    'servicemen': ['defense-welfare'],
    
    // Digital services
    'digilocker': ['digital-digilocker'],
    'umang': ['digital-umang'],
    'certificate': ['digital-edistrict'],
    
    // Governance
    'rights': ['governance-rights'],
    'rti': ['governance-rti'],
    'law': ['governance-laws'],
    'constitution': ['governance-rights']
};

let chatbotOpen = false;
let chatHistory = [];
let isTyping = false;
let currentStreamingMessage = null;

function initChatbot() {
    const chatbotHTML = `
        <div id="chatbot-container" class="chatbot-container">
            <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Open AI Assistant">
                <i class="fas fa-robot"></i>
            </button>
            
            <div id="chatbot-window" class="chatbot-window" style="display: none;">
                <div class="chatbot-header">
                    <div class="chatbot-header-content">
                        <i class="fas fa-robot"></i>
                        <div>
                            <h3>Portal Assistant</h3>
                            <p>Ask me about government services</p>
                        </div>
                    </div>
                    <button id="chatbot-close" class="chatbot-close-btn" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div id="chatbot-messages" class="chatbot-messages">
                    <div class="chatbot-message bot-message">
                        <div class="message-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <p>Hello! I'm your Portal Assistant. Tell me what you're looking for, and I'll help you find the right government portal.</p>
                            <p class="message-examples">Try asking: "I need a scholarship" or "How to apply for PAN card?"</p>
                        </div>
                    </div>
                </div>
                
                <div class="chatbot-input-container">
                    <input 
                        type="text" 
                        id="chatbot-input" 
                        class="chatbot-input" 
                        placeholder="Type your question here..."
                        autocomplete="off"
                    />
                    <button id="chatbot-send" class="chatbot-send-btn" aria-label="Send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Event listeners
    document.getElementById('chatbot-toggle').addEventListener('click', toggleChatbot);
    document.getElementById('chatbot-close').addEventListener('click', toggleChatbot);
    document.getElementById('chatbot-send').addEventListener('click', sendMessage);
    document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function toggleChatbot() {
    chatbotOpen = !chatbotOpen;
    const window = document.getElementById('chatbot-window');
    const toggle = document.getElementById('chatbot-toggle');
    
    if (chatbotOpen) {
        window.style.display = 'flex';
        toggle.style.display = 'none';
        document.getElementById('chatbot-input').focus();
    } else {
        window.style.display = 'none';
        toggle.style.display = 'flex';
    }
}

async function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message || isTyping) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Add to chat history
    chatHistory.push({ role: 'user', content: message });
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process and respond with streaming
    await processMessageStreaming(message);
}

function addMessage(text, type, portals = null, isStreaming = false) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${type}-message`;
    
    if (type === 'user') {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${escapeHtml(text)}</p>
            </div>
            <div class="message-avatar user-avatar">
                <i class="fas fa-user"></i>
            </div>
        `;
    } else {
        let portalHTML = '';
        if (portals && portals.length > 0) {
            portalHTML = '<div class="portal-suggestions">';
            portals.forEach(portal => {
                portalHTML += `
                    <a href="${portal.url}" target="_blank" class="portal-suggestion">
                        <i class="fas fa-external-link-alt"></i>
                        <span>${escapeHtml(portal.name)}</span>
                    </a>
                `;
            });
            portalHTML += '</div>';
        }
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p class="message-text">${text}</p>
                ${portalHTML}
            </div>
        `;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    return messageDiv;
}

function showTypingIndicator() {
    isTyping = true;
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    isTyping = false;
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function updateStreamingMessage(messageDiv, text) {
    const messageText = messageDiv.querySelector('.message-text');
    if (messageText) {
        messageText.innerHTML = formatMarkdown(text);
    }
    const messagesContainer = document.getElementById('chatbot-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function formatMarkdown(text) {
    // Simple markdown formatting
    let formatted = escapeHtml(text);
    
    // Bold
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Links
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1 <i class="fas fa-external-link-alt"></i></a>');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
}

async function processMessageStreaming(message) {
    // Check if API key is configured
    if (GEMINI_API_KEY === 'YOUR_API_KEY_HERE' || !GEMINI_API_KEY) {
        hideTypingIndicator();
        const response = processMessageFallback(message);
        addMessage(response.text, 'bot', response.portals);
        return;
    }
    
    try {
        // Create context about available portals
        const portalContext = portals.map(p => `- ${p.name}: ${p.description}`).join('\n');
        
        const prompt = `You are a helpful AI assistant for a Government of India Portal Directory website.

Available portals in our directory:
${portalContext}

User question: ${message}

Instructions:
1. Understand the user's need and provide helpful guidance
2. If we have relevant portals in our directory, recommend them by name
3. If we DON'T have the portal they need, suggest external government websites or resources they can use (provide actual URLs)
4. Be conversational, concise, and helpful
5. Use **bold** for portal names
6. Provide direct links in format [Portal Name](URL) when suggesting external resources
7. Keep responses under 150 words

Example responses:
- "For PAN card services, check out **Income Tax e-Filing Portal** in our directory."
- "We don't have that specific portal, but you can visit [EPFO Portal](https://www.epfindia.gov.in) directly for provident fund services."

Respond now:`;

        const response = await fetch(`${GEMINI_STREAM_URL}?key=${GEMINI_API_KEY}&alt=sse`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500,
                }
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        hideTypingIndicator();
        
        // Create message div for streaming
        currentStreamingMessage = addMessage('', 'bot');
        let fullText = '';
        
        // Read the stream
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const jsonStr = line.slice(6);
                        if (jsonStr.trim() === '') continue;
                        
                        const data = JSON.parse(jsonStr);
                        if (data.candidates && data.candidates[0].content) {
                            const text = data.candidates[0].content.parts[0].text;
                            fullText += text;
                            updateStreamingMessage(currentStreamingMessage, fullText);
                        }
                    } catch (e) {
                        // Skip invalid JSON
                    }
                }
            }
        }
        
        // Add chat history
        chatHistory.push({ role: 'assistant', content: fullText });
        
        // Extract and add portal suggestions
        setTimeout(() => {
            const mentionedPortals = extractMentionedPortals(fullText);
            if (mentionedPortals.length > 0) {
                addPortalSuggestions(currentStreamingMessage, mentionedPortals);
            }
        }, 300);
        
    } catch (error) {
        console.error('Gemini API error:', error);
        hideTypingIndicator();
        const response = processMessageFallback(message);
        addMessage(response.text, 'bot', response.portals);
    }
}

function extractMentionedPortals(text) {
    const mentioned = [];
    const lowerText = text.toLowerCase();
    
    for (const portal of portals) {
        // Check if portal name is mentioned (at least first 15 chars)
        const portalNameLower = portal.name.toLowerCase();
        const searchTerm = portalNameLower.substring(0, Math.min(15, portalNameLower.length));
        
        if (lowerText.includes(searchTerm)) {
            mentioned.push(portal);
            if (mentioned.length >= 5) break;
        }
    }
    
    return mentioned;
}

function addPortalSuggestions(messageDiv, portals) {
    const messageContent = messageDiv.querySelector('.message-content');
    if (!messageContent || portals.length === 0) return;
    
    let portalHTML = '<div class="portal-suggestions">';
    portals.forEach(portal => {
        portalHTML += `
            <a href="${portal.url}" target="_blank" class="portal-suggestion">
                <i class="fas fa-external-link-alt"></i>
                <span>${escapeHtml(portal.name)}</span>
            </a>
        `;
    });
    portalHTML += '</div>';
    
    messageContent.insertAdjacentHTML('beforeend', portalHTML);
}

function processMessageFallback(message) {
    const lowerMessage = message.toLowerCase();
    const matchedCategories = new Set();
    
    // Find matching keywords
    for (const [keyword, categories] of Object.entries(chatbotKeywords)) {
        if (lowerMessage.includes(keyword)) {
            categories.forEach(cat => matchedCategories.add(cat));
        }
    }
    
    if (matchedCategories.size === 0) {
        return {
            text: "I couldn't find a specific match for your query. Could you try rephrasing? For example, mention keywords like 'scholarship', 'job', 'PAN card', 'farmer', 'health', etc.\n\nNote: For better AI responses, please configure the Gemini API key in chatbot.js",
            portals: null
        };
    }
    
    // Get matching portals
    const matchedPortals = portals.filter(portal => 
        matchedCategories.has(portal.category)
    ).slice(0, 5);
    
    let responseText = `I found ${matchedPortals.length} relevant portal${matchedPortals.length > 1 ? 's' : ''} for you. Here are my recommendations:`;
    
    return {
        text: responseText,
        portals: matchedPortals
    };
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initChatbot, 1000);
});
