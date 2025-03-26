import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const SideBar = ({ config, isDarkMode, currentLanguage }) => {
    const location = useLocation();
    const { getTranslation } = useTranslation();
    const configTranslations = config.translations[currentLanguage] || config.translations['en'];

    const getPageName = (page) => {
        return processTranslationPlaceholders(page.name, configTranslations);
    };

    return (
        <div className="d-none d-md-flex flex-column border-end position-fixed h-100" 
             style={{ 
                 width: 'var(--sidebar-width, 220px)',
                 top: 'min(56px, 8vh)',
                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                 borderColor: `${isDarkMode ? '#404040' : '#e9ecef'} !important`
             }}>
            <div className="flex-grow-1 overflow-auto">
                <div className="p-3">
                    {config.pages.map((page, index) => (
                        <Link key={index} 
                              to={page.path}
                              className={`nav-link mb-2 rounded-2 ${location.pathname === page.path ? '' : 'opacity-75'}`}
                              style={{ 
                                  color: location.pathname === page.path 
                                      ? config.styles.primaryColor 
                                      : isDarkMode ? '#ffffff' : '#000000'
                              }}>
                            <div className="d-flex align-items-center gap-2">
                                <div className="rounded-2 d-flex align-items-center justify-content-center" 
                                     style={{ 
                                         backgroundColor: location.pathname === page.path 
                                             ? `${config.styles.primaryColor}14` 
                                             : 'transparent',
                                         width: '32px', 
                                         height: '32px' 
                                     }}>
                                    <i className={`bi bi-${page.icon} fs-5`}></i>
                                </div>
                                <span className="fw-medium" style={{ fontSize: '14px' }}>
                                    {getPageName(page)}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideBar; 