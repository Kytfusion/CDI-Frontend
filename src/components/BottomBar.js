import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomBar = ({ config }) => {
    const location = useLocation();
    return (
        <nav className="navbar fixed-bottom bg-white" style={{ height: 'min(56px, 8vh)', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
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
};

export default BottomBar; 