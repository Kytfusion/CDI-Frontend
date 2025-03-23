import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getConfig } from './config';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import MainContent from './components/MainContent';

function App() {
    const config = getConfig(process.env.REACT_APP_CONFIG_TYPE);
    const { primaryColor } = config.styles;
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const hexToRgba = (hex, opacity) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return (
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
    );
}

export default App;