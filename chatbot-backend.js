// AI Chatbot for Government Portal Directory
// Backend version - Uses Node.js server for API calls

// Configuration - Uses config.js for environment-specific settings
const USE_BACKEND = window.APP_CONFIG?.features?.useBackend ?? true;
const BACKEND_URL = window.APP_CONFIG?.backend?.getUrl() ?? null;

// Debug logging
console.log('🔧 Chatbot Configuration:');
console.log('USE_BACKEND:', USE_BACKEND);
console.log('BACKEND_URL:', BACKEND_URL);
console.log('Current hostname:', window.location.hostname);

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
    'constitution': ['governance-rights'],
    'grievance': ['governance-grievance'],
    'complaint': ['governance-grievance'],
    'cpgrams': ['governance-grievance'],
    'legal': ['governance-legal'],
    'lawyer': ['governance-legal'],
    'nalsa': ['governance-legal'],
    'guide': ['digital-guides'],
    'how to': ['digital-guides'],
    'steps': ['digital-guides'],
    'eligibility': ['welfare-schemes'],
    'myscheme': ['welfare-schemes'],
    'scheme': ['welfare-schemes']
};

let chatbotOpen = false;
let chatHistory = [];
let isTyping = false;
let currentStreamingMessage = null;

function initChatbot() {
    const chatbotHTML = `
        <div id="chatbot-container" class="chatbot-container">
            <div id="chatbot-window" class="chatbot-window">
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
                            <p><strong>Assalamu Alaikum!</strong> 👋</p>
                            <p>I'm your AI Portal Assistant. I can help you find government portals, schemes, and services. Whether it's in our directory or elsewhere, I'll guide you to the right resources.</p>
                            <p class="message-examples"><strong>Try asking:</strong><br>
                            • "I need a scholarship for college"<br>
                            • "How to apply for PAN card?"<br>
                            • "Show me farmer welfare schemes"<br>
                            • "Where to check my CIBIL score?"</p>
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
    const navbarBtn = document.getElementById('ai-assistant-btn');
    if (navbarBtn) {
        navbarBtn.addEventListener('click', toggleChatbot);
    }
    document.getElementById('chatbot-close').addEventListener('click', toggleChatbot);
    document.getElementById('chatbot-send').addEventListener('click', sendMessage);
    document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Close on backdrop click
    const container = document.getElementById('chatbot-container');
    container.addEventListener('click', (e) => {
        if (e.target === container && chatbotOpen) {
            toggleChatbot();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatbotOpen) {
            toggleChatbot();
        }
    });
}

function toggleChatbot() {
    chatbotOpen = !chatbotOpen;
    const container = document.getElementById('chatbot-container');
    
    if (chatbotOpen) {
        container.classList.add('active');
        setTimeout(() => {
            document.getElementById('chatbot-input').focus();
        }, 100);
    } else {
        container.classList.remove('active');
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

function addMessage(text, type, portals = null) {
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
    let formatted = escapeHtml(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1 <i class="fas fa-external-link-alt"></i></a>');
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
}

async function processMessageStreaming(message) {
    // Check if backend is available
    console.log('🔍 Processing message:', message);
    console.log('🔍 USE_BACKEND:', USE_BACKEND);
    console.log('🔍 BACKEND_URL:', BACKEND_URL);
    
    if (!USE_BACKEND || !BACKEND_URL) {
        console.error('❌ Backend not available! Using fallback.');
        hideTypingIndicator();
        const response = processMessageFallback(message);
        addMessage(response.text, 'bot', response.portals);
        return;
    }
    
    try {
        console.log('📡 Sending request to:', BACKEND_URL);
        
        // Send request to backend
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                portals: portals
            })
        });

        console.log('📡 Response status:', response.status);

        if (!response.ok) {
            throw new Error(`Backend request failed with status ${response.status}`);
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
                    const data = line.slice(6);
                    
                    if (data === '[DONE]') {
                        break;
                    }
                    
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.text) {
                            fullText += parsed.text;
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
        console.error('Backend error:', error);
        hideTypingIndicator();
        const response = processMessageFallback(message);
        addMessage(response.text, 'bot', response.portals);
    }
}

function extractMentionedPortals(text) {
    const mentioned = [];
    const lowerText = text.toLowerCase();
    
    for (const portal of portals) {
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
    
    for (const [keyword, categories] of Object.entries(chatbotKeywords)) {
        if (lowerMessage.includes(keyword)) {
            categories.forEach(cat => matchedCategories.add(cat));
        }
    }
    
    if (matchedCategories.size === 0) {
        return {
            text: "I couldn't find a specific match for your query. Could you try rephrasing? For example, mention keywords like 'scholarship', 'job', 'PAN card', 'farmer', 'health', etc.\n\nNote: For better AI responses, please start the backend server.",
            portals: null
        };
    }
    
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
