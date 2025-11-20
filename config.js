// Configuration for Frontend
// This file helps manage different environments (local vs production)

const CONFIG = {
    // Backend API Configuration
    backend: {
        // Local development URL
        local: 'http://localhost:3000/api/chat',
        
        // Production backend URL (Render) - Update after deployment
        production: 'http://localhost:3000/api/chat',
        
        // Auto-detect which URL to use
        getUrl: function() {
            const isLocal = window.location.hostname === 'localhost' || 
                          window.location.hostname === '127.0.0.1';
            
            if (isLocal) {
                return this.local;
            }
            
            // Always return production URL when not local
            return this.production;
        }
    },
    
    // Feature flags
    features: {
        useBackend: true,
        enableStreaming: true,
        enableFallback: true
    }
};

// Make config available globally
window.APP_CONFIG = CONFIG;
