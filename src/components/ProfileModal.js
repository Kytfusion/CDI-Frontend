import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserAuthenticated, setUserAuthenticated, useTranslation } from '../App';

const ProfileModal = ({ show, modalRef, config, isDarkMode }) => {
    const navigate = useNavigate();
    const { getTranslation } = useTranslation();

    if (!show) return null;

    const handleLogout = (e) => {
        e.stopPropagation();
        setUserAuthenticated(false);
        navigate('/welcome');
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div ref={modalRef} 
             className="position-absolute rounded-3 shadow-sm p-3"
             onClick={handleModalClick}
             style={{
                 top: 'calc(100% + 8px)',
                 right: 0,
                 width: '280px',
                 zIndex: 1050,
                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                 color: isDarkMode ? '#ffffff' : '#000000'
             }}>
            {isUserAuthenticated() ? (
                <>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                             style={{ width: '48px', height: '48px' }}>
                            <i className="bi bi-person-fill fs-4" style={{ color: config.styles.primaryColor }}></i>
                        </div>
                        <div>
                            <h6 className="mb-0 fw-semibold">Ion Popescu</h6>
                            <small style={{ color: isDarkMode ? '#a0a0a0' : '#6c757d' }}>ion.popescu@example.com</small>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <button onClick={(e) => {
                            e.stopPropagation();
                            navigate('/profile');
                        }} 
                                className="btn text-start w-100"
                                style={{
                                    backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                    border: 'none'
                                }}>
                            <i className="bi bi-person me-2"></i>
                            {getTranslation('myProfile')}
                        </button>
                        <button onClick={handleLogout} 
                                className="btn text-start w-100"
                                style={{
                                    backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                    border: 'none'
                                }}>
                            <i className="bi bi-box-arrow-right me-2"></i>
                            {getTranslation('logout')}
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h6 className="mb-3 fw-semibold">{getTranslation('welcome')}</h6>
                    <div className="d-flex flex-column gap-2">
                        <button onClick={(e) => {
                            e.stopPropagation();
                            navigate('/auth?mode=login');
                        }} 
                                className="btn btn-primary w-100">
                            {getTranslation('login')}
                        </button>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            navigate('/auth?mode=register');
                        }} 
                                className="btn w-100"
                                style={{
                                    backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                    border: 'none'
                                }}>
                            {getTranslation('register')}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileModal; 
