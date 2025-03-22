import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomBar = ({ config, isExpanded, onToggle }) => {
    const location = useLocation();

    const getMenuItemStyle = (isActive) => ({
        color: isActive ? config.styles.primaryColor : undefined,
        borderRadius: '8px',
        whiteSpace: 'nowrap',
        padding: '6px',
        backgroundColor: isActive ? `${config.styles.primaryColor}14` : 'transparent'
    });

    const renderMobileNav = () => (
        <nav className="navbar fixed-bottom bg-white d-block d-md-none" style={{ height: 'min(56px, 8vh)', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <ul className="nav w-100 h-100 d-flex justify-content-around align-items-center">
                {config.pages.map((page, index) => (
                    <li key={index} className="nav-item text-center">
                        <Link to={page.path} className={`nav-link p-0 ${location.pathname === page.path ? '' : 'text-dark opacity-75'}`}
                             style={{ color: location.pathname === page.path ? config.styles.primaryColor : undefined }}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" 
                                 style={{ backgroundColor: location.pathname === page.path ? `${config.styles.primaryColor}14` : 'transparent', width: '32px', height: '32px' }}>
                                <i className={`bi ${page.icon} fs-5`}></i>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );

    const renderMenuItem = (path, icon, name, isLast = false) => (
        <li className={`nav-item px-3 ${!isLast ? 'mb-3' : ''}`}>
            <Link to={path} 
                className={`nav-link d-flex align-items-center ${location.pathname === path ? '' : 'text-dark opacity-75'}`}
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
        <nav className="navbar bg-white d-none d-md-block position-fixed start-0 transition-all overflow-hidden" 
             style={{ 
                width: isExpanded ? '220px' : '80px', 
                top: 'min(56px, 8vh)',
                height: 'calc(100vh - min(56px, 8vh))', 
                boxShadow: '2px 0 8px rgba(0,0,0,0.04)', 
                borderRight: '1px solid rgba(0,0,0,0.08)',
                zIndex: 1030,
                transition: 'width 0.3s ease'
             }}>
            <div className="h-100 w-100 d-flex flex-column position-relative">
                <button 
                    onClick={onToggle}
                    className="position-absolute end-0 top-50 translate-middle-y bg-white border-0 rounded-start-pill shadow-sm"
                    style={{
                        width: '23px',
                        height: '40px',
                        transform: 'translateX(100%)',
                        cursor: 'pointer',
                        zIndex: 1
                    }}
                >
                    <i className={`bi bi-chevron-${isExpanded ? 'left' : 'right'} fs-6`}></i>
                </button>
                <ul className="nav flex-column w-100 pt-4">
                    {config.pages.map((page, index) => 
                        renderMenuItem(page.path, page.icon, page.name)
                    )}
                </ul>
                <div className="mt-auto">
                    <ul className="nav flex-column w-100 mb-4">
                        {renderMenuItem('/settings', 'bi-gear-fill', 'Setări', true)}
                    </ul>
                </div>
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