import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';
import { isUserAuthenticated } from '../App';
import { useTranslation } from '../App';

const processTranslationPlaceholders = (content, translations) => {
    if (!content) return '';
    return content.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        const keys = key.split('.');
        let value = translations;
        for (const k of keys) {
            value = value?.[k];
        }
        return value || match;
    });
};

const DynamicPage = ({ content, translations }) => {
    const processedContent = processTranslationPlaceholders(content, translations);
    
    return (
        <div className="dynamic-page">
            <div dangerouslySetInnerHTML={{ __html: processedContent }} />
        </div>
    );
};

const WelcomePage = ({ config, isDarkMode, translations }) => {
    const welcomePage = config.publicPages.find(page => page.path === '/welcome');
    if (!welcomePage) return null;
    
    return (
        <div className="welcome-page">
            {welcomePage.sections.map((section, index) => {
                const sectionKey = section.name.toLowerCase().replace(/\s+/g, '');
                const translation = translations.welcome[sectionKey] || { name: section.name, content: section.content };
                const processedContent = processTranslationPlaceholders(section.content, translations);
                
                return (
                    <div key={index} className={`section ${sectionKey}-section`}>
                        <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                    </div>
                );
            })}
        </div>
    );
};

const MainContent = ({ config, isDarkMode }) => {
    const { currentLanguage } = useTranslation();
    const translations = config.translations[currentLanguage] || config.translations['en'];

    return (
        <div style={{ 
            position: 'fixed',
            top: 'min(56px, 8vh)',
            bottom: isUserAuthenticated() ? 'min(56px, 8vh)' : 0,
            left: 0,
            right: 0,
            overflow: 'auto',
            padding: '20px',
            transition: 'left 0.3s ease',
            backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000'
        }} className="d-flex flex-column main-content">
            <div className="flex-grow-1">
                <Routes>
                    <Route path="/" element={
                        isUserAuthenticated() 
                            ? <Navigate to={config.pages[0].path} replace /> 
                            : <Navigate to="/welcome" replace />
                    } />
                    <Route path="/welcome" element={<WelcomePage config={config} isDarkMode={isDarkMode} translations={translations} />} />
                    <Route path="/auth" element={<Auth isDarkMode={isDarkMode} />} />
                    {config.pages.map((page, index) => {
                        const pageKey = page.name.toLowerCase().replace(/\s+/g, '');
                        const translation = translations.pages[pageKey] || { name: page.name, content: page.content };
                        
                        return (
                            <Route 
                                key={index} 
                                path={page.path} 
                                element={
                                    isUserAuthenticated() 
                                        ? <DynamicPage content={translation.content} translations={translations} />
                                        : <Navigate to="/welcome" replace />
                                } 
                            />
                        );
                    })}
                </Routes>
            </div>
            <style>{`
                @media (min-width: 768px) {
                    .main-content {
                        left: ${isUserAuthenticated() ? 'var(--sidebar-width, 220px)' : '0'} !important;
                    }
                    .sidebar-collapsed .main-content {
                        left: ${isUserAuthenticated() ? '80px' : '0'} !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default MainContent; 