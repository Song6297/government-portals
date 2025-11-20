# Beyond Guidance - Government Portal Directory

A comprehensive directory of 90+ verified Indian government portals with an AI-powered assistant to help citizens navigate schemes, services, and resources.

## 🌟 Features

### 🎨 Modern Design
- **Teal & Ivory Color Scheme** - Clean, professional aesthetic
- **Responsive Layout** - Optimized for all devices
- **Smooth Animations** - Enhanced user experience
- **Glassmorphism Effects** - Modern UI elements

### 🤖 AI-Powered Assistant
- **Real-time Streaming Responses** - ChatGPT-like word-by-word output
- **Intelligent Portal Recommendations** - Context-aware suggestions
- **Natural Language Processing** - Powered by Google Gemini 2.5 Flash
- **Fallback System** - Keyword matching when API unavailable

### 📱 Mobile-First Navigation
- **Bottom Icon Bar** - Thumb-friendly navigation with AI Bot, Preamble, and About icons
- **Sticky Category Dropdown** - Quick filtering above hero section
- **No Hamburger Menu** - All navigation visible and accessible
- **Smooth Animations** - Slide-up effects and icon scaling

### 🔍 Advanced Filtering
- **Smart Search** - Real-time portal search by name or description
- **Category Organization** - 10+ organized categories
- **Instant Results** - Dynamic filtering without page reload

### 📊 Portal Categories
- Karnataka State Services (Electricity, Transport, Land Records)
- Defense Services (Army, Navy, Air Force)
- Education & Scholarships
- Farmer Schemes
- Identity Documents (Aadhaar, PAN, Passport, etc.)
- Employment & Business
- Social Welfare
- Digital Services
- Governance & Law
- Citizen Resources

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- Google Gemini API Key ([Get one free](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/beyond-guidance.git
cd beyond-guidance
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your Gemini API key:
```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=3000
```

4. **Start the server**
```bash
npm start
```

5. **Open in browser**
```
http://localhost:3000
```

## 📦 Project Structure

```
beyond-guidance/
├── index.html              # Main page
├── style.css               # Styles with teal theme
├── script.js               # Portal filtering & UI logic
├── server.js               # Backend API server
├── chatbot.js              # Chatbot frontend logic
├── chatbot.css             # Chatbot styling
├── about.html              # About page
├── preamble.html           # Constitution preamble
├── package.json            # Dependencies
├── .env.example            # Environment template
└── assets/
    ├── BG.png              # Beyond Guidance logo
    ├── BGT.png             # Transparent logo
    ├── IIC.png             # Islamic Information Centre logo
    └── IICT.png            # Transparent IIC logo
```

## 🎯 Mobile Navigation

### Desktop (>768px)
- Traditional top navigation bar
- Category dropdown in navbar
- AI Assistant, Preamble, and About buttons in navbar

### Mobile (≤768px)
- **Bottom Navigation Bar** - Fixed at bottom with 3 icons
  - 🤖 AI Bot - Opens chatbot
  - 📖 Preamble - Constitution page
  - ℹ️ About - About Us page
- **Category Dropdown** - Sticky above hero section
- **Search Bar** - Remains in top navbar

## 🛠️ Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)
- Responsive Design (Mobile-first)

### Backend
- Node.js + Express
- Google Gemini 2.5 Flash API
- CORS enabled
- Environment-based configuration

### Deployment
- Railway (recommended)
- Heroku
- Any Node.js hosting platform

## 🔐 Security

- ✅ API keys stored in environment variables
- ✅ `.env` file excluded from Git
- ✅ No hardcoded credentials
- ✅ CORS configured for security
- ✅ Input sanitization

## 🌐 Deployment

### Deploy to Railway

1. **Create Railway account** at [railway.app](https://railway.app)

2. **Create new project** from GitHub repo

3. **Add environment variables**
   - `GEMINI_API_KEY` = your API key
   - `PORT` = 3000 (optional, Railway auto-assigns)

4. **Deploy** - Railway automatically builds and deploys

### Deploy to Heroku

```bash
heroku create your-app-name
heroku config:set GEMINI_API_KEY=your_api_key_here
git push heroku main
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Credits

**Developed by:** Beyond Guidance  
**Organization:** Islamic Information Centre  
**Year:** 2024-2025

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Visit the About Us page for contact information

## 🎨 Design Philosophy

- **Minimal Luxury** - Clean, sophisticated interface
- **Accessibility First** - WCAG compliant
- **Performance Optimized** - Fast loading times
- **User-Centric** - Intuitive navigation and clear information hierarchy

## 📊 Portal Statistics

- **90+ Verified Portals** - Regularly updated
- **10+ Categories** - Organized for easy discovery
- **Real-time Search** - Instant filtering
- **AI-Powered Help** - Intelligent assistance

---

**Made with ❤️ by Beyond Guidance - Islamic Information Centre**
