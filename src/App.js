import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import defaultAppConfig from './config/default-app.json';
import walletAppConfig from './config/wallet-app.json';
import translations from './config/translations.json';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import MainContent from './components/MainContent';

let isAuthenticated = 0;

export const isUserAuthenticated = () => isAuthenticated === 1;

export const setUserAuthenticated = (value) => {
    isAuthenticated = value ? 1 : 0;
};

export const TranslationContext = createContext();

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};

export const getConfig = (type) => {
    const configType = type || 'default';
    
    switch (configType) {
        case 'wallet':
            return walletAppConfig;
        case 'default':
        default:
            return defaultAppConfig;
    }
};

function App() {
    const config = getConfig(process.env.REACT_APP_CONFIG_TYPE);
    const { primaryColor } = config.styles;
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'ro';
    });

    const getTranslation = (key) => {
        return translations[currentLanguage][key] || translations['en'][key] || key;
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('language', currentLanguage);
    }, [currentLanguage]);

    const hexToRgba = (hex, opacity) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return (
        <TranslationContext.Provider value={{ getTranslation, currentLanguage, setCurrentLanguage }}>
            <Router>
                <div className={`min-vh-100 ${isSidebarExpanded ? '' : 'sidebar-collapsed'}`} 
                     style={{ 
                         backgroundColor: isDarkMode ? '#1a1a1a' : hexToRgba(primaryColor, 0.05),
                         '--sidebar-width': isSidebarExpanded ? '220px' : '80px'
                     }}>
                    <TopBar 
                        config={config} 
                        isDarkMode={isDarkMode} 
                        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
                        currentLanguage={currentLanguage}
                        onLanguageChange={setCurrentLanguage}
                    />
                    <BottomBar 
                        config={config} 
                        isExpanded={isSidebarExpanded} 
                        onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)} 
                        isDarkMode={isDarkMode}
                    />
                    <MainContent 
                        config={config} 
                        isDarkMode={isDarkMode}
                    />
                </div>
            </Router>
        </TranslationContext.Provider>
    );
}

export default App;