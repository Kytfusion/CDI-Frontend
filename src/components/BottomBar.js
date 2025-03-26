import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isUserAuthenticated, useTranslation } from '../App';

const BottomBar = ({ config, isExpanded, onToggle, isDarkMode }) => {
    const location = useLocation();
    const { currentLanguage } = useTranslation();
    const translations = config.translations[currentLanguage]?.pages || config.translations['en'].pages;

    if (!isUserAuthenticated()) {
        return null;
    }

    const getMenuItemStyle = (isActive) => ({
        color: isActive ? config.styles.primaryColor : isDarkMode ? '#ffffff' : '#000000',
        borderRadius: '8px',
        whiteSpace: 'nowrap',
        padding: '6px',
        backgroundColor: isActive ? `${config.styles.primaryColor}14` : 'transparent'
    });

    const getActiveClass = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const getIconClass = (icon) => {
        return `bi ${icon} fs-5`;
    };

    const getPageName = (page) => {
        const pageKey = page.name.toLowerCase().replace(/\s+/g, '');
        return translations[pageKey]?.name || page.name;
    };

    const renderMobileNav = () => (
        <div className="fixed-bottom d-md-none w-100" 
             style={{ 
                 height: 'min(56px, 8vh)', 
                 boxShadow: '0 -2px 8px rgba(0,0,0,0.04)', 
                 borderTop: '1px solid rgba(0,0,0,0.08)',
                 zIndex: 1040,
                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff'
             }}>
            <div className="d-flex justify-content-around align-items-center h-100">
                {config.pages.map((page, index) => (
                    <Link 
                        key={index}
                        to={page.path}
                        className={`text-decoration-none d-flex flex-column align-items-center justify-content-center ${getActiveClass(page.path)}`}
                        style={{ 
                            color: isDarkMode ? '#ffffff' : '#000000',
                            opacity: getActiveClass(page.path) ? 1 : 0.7,
                            transition: 'opacity 0.2s ease'
                        }}
                    >
                        <i className={getIconClass(page.icon)}></i>
                        <small className="mt-1" style={{ fontSize: '0.7rem' }}>{getPageName(page)}</small>
                    </Link>
                ))}
            </div>
        </div>
    );

    const renderMenuItem = (path, icon, name, isLast = false) => (
        <li className={`nav-item px-3 ${!isLast ? 'mb-3' : ''}`}>
            <Link to={path} 
                className={`nav-link d-flex align-items-center ${location.pathname === path ? '' : 'opacity-75'}`}
                style={getMenuItemStyle(location.pathname === path)}>
                <div className="rounded-2 d-flex align-items-center justify-content-center" 
                     style={{ 
                         width: '40px', 
                         height: '40px',
                         minWidth: '40px'
                     }}>
                    <i className={`bi ${icon} fs-4`}></i>
                </div>
                <span className="fw-medium ms-2" 
                      style={{
                          opacity: isExpanded ? 1 : 0,
                          transition: 'opacity 0.2s ease',
                          transitionDelay: isExpanded ? '0.1s' : '0s',
                          width: isExpanded ? 'auto' : 0,
                          overflow: 'hidden'
                      }}>
                    {name}
                </span>
            </Link>
        </li>
    );

    const renderDesktopNav = () => (
        <nav className="navbar d-none d-md-block position-fixed start-0 transition-all overflow-hidden" 
             style={{ 
                 width: isExpanded ? '220px' : '80px', 
                 top: 'min(56px, 8vh)',
                 height: 'calc(100vh - min(56px, 8vh))', 
                 boxShadow: '2px 0 8px rgba(0,0,0,0.04)', 
                 borderRight: '1px solid rgba(0,0,0,0.08)',
                 zIndex: 1030,
                 transition: 'width 0.3s ease',
                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff'
             }}>
            <div className="h-100 w-100 d-flex flex-column position-relative">
                <button 
                    onClick={onToggle}
                    className="position-absolute end-0 top-50 translate-middle-y border-0 rounded-start-pill shadow-sm"
                    style={{
                        width: '23px',
                        height: '40px',
                        transform: 'translateX(100%)',
                        cursor: 'pointer',
                        zIndex: 1,
                        backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#000000'
                    }}
                >
                    <i className={`bi bi-chevron-${isExpanded ? 'left' : 'right'} fs-6`}></i>
                </button>
                <ul className="nav flex-column w-100 pt-4">
                    {config.pages.map((page, index) => 
                        renderMenuItem(page.path, page.icon, page.name)
                    )}
                </ul>
            </div>
        </nav>
    );

    return (
        <>
            {renderMobileNav()}
            {renderDesktopNav()}
        </>
    );
};

export default BottomBar; 
