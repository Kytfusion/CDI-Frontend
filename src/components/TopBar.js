import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TopBar = ({ config }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const getPageTitle = () => {
        const currentPage = config.pages.find(page => page.path === location.pathname);
        return currentPage ? currentPage.name : config.pages[0].name;
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="fixed-top bg-white" style={{ height: 'min(56px, 8vh)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <div className="d-flex align-items-center justify-content-between h-100 px-3">
                <button onClick={handleBack} 
                        className="btn d-flex align-items-center gap-2 p-0 border-0">
                    <div className="d-flex align-items-center justify-content-center rounded-2 text-dark opacity-75"
                         style={{ width: '32px', height: '32px' }}>
                        <i className="bi bi-chevron-left fs-4"></i>
                    </div>
                    <span className="text-dark opacity-75 fw-medium" style={{ fontSize: '14px' }}>Back</span>
                </button>
                
                <h6 className="mb-0 fw-semibold text-dark">{getPageTitle()}</h6>
                
                <div style={{ width: '32px' }}></div>
            </div>
        </div>
    );
};

export default TopBar; 