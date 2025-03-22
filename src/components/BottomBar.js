import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomBar = ({ config }) => {
    const location = useLocation();

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

    const renderDesktopNav = () => (
        <nav className="navbar bg-white d-none d-md-block position-fixed start-0" 
             style={{ 
                width: '220px', 
                top: 'min(56px, 8vh)',
                height: 'calc(100vh - min(56px, 8vh))', 
                boxShadow: '2px 0 8px rgba(0,0,0,0.04)', 
                borderRight: '1px solid rgba(0,0,0,0.08)',
                zIndex: 1030 
             }}>
            <div className="h-100 overflow-auto w-100">
                <ul className="nav flex-column w-100 pt-4">
                    {config.pages.map((page, index) => (
                        <li key={index} className="nav-item mb-3 px-3">
                            <Link to={page.path} 
                                className={`nav-link d-flex align-items-center p-2 ${location.pathname === page.path ? '' : 'text-dark opacity-75'}`}
                                style={{ 
                                    color: location.pathname === page.path ? config.styles.primaryColor : undefined,
                                    borderRadius: '8px',
                                    backgroundColor: location.pathname === page.path ? `${config.styles.primaryColor}14` : 'transparent'
                                }}>
                                <div className="rounded-2 d-flex align-items-center justify-content-center me-3" 
                                     style={{ 
                                        width: '40px', 
                                        height: '40px' 
                                     }}>
                                    <i className={`bi ${page.icon} fs-4`}></i>
                                </div>
                                <span className="fw-medium">{page.name}</span>
                            </Link>
                        </li>
                    ))}
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