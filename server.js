// Backend Server for AI Chatbot
// This keeps your API key secure on the server side

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Chat endpoint with streaming
app.post('/api/chat', async (req, res) => {
    try {
        const { message, portals } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Create context about available portals
        const portalContext = portals 
            ? portals.map(p => `- ${p.name}: ${p.description}`).join('\n')
            : '';

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

Respond now:`;

        // Set headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Get the model (using latest available model)
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        // Generate content with streaming
        const result = await model.generateContentStream(prompt);

        // Stream the response
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`);
        }

        res.write('data: [DONE]\n\n');
        res.end();

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Failed to generate response',
            message: error.message 
        });
    }
});

// Non-streaming endpoint (fallback)
app.post('/api/chat-simple', async (req, res) => {
    try {
        const { message, portals } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const portalContext = portals 
            ? portals.map(p => `- ${p.name}: ${p.description}`).join('\n')
            : '';

        const prompt = `You are a helpful AI assistant for a Government of India Portal Directory website.

Available portals in our directory:
${portalContext}

User question: ${message}

Instructions:
1. Understand the user's need and provide helpful guidance
2. If we have relevant portals in our directory, recommend them by name
3. If we DON'T have the portal they need, suggest external government websites with URLs
4. Be conversational, concise, and helpful
5. Use **bold** for portal names
6. Provide links as [Portal Name](URL)
7. Keep responses under 150 words

Respond now:`;

        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ text });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Failed to generate response',
            message: error.message 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/chat`);
    console.log(`🌐 Frontend: http://localhost:${PORT}/index.html`);
});
