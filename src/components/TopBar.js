import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { isUserAuthenticated } from '../config';
import ProfileModal from './ProfileModal';
import SettingsModal from './SettingsModal';

const TopBar = ({ config, isDarkMode, onToggleDarkMode }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const profileModalRef = useRef(null);
    const settingsModalRef = useRef(null);
    const profileButtonRef = useRef(null);
    const settingsButtonRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileModalRef.current && 
                profileButtonRef.current && 
                !profileModalRef.current.contains(event.target) && 
                !profileButtonRef.current.contains(event.target)) {
                setShowProfileModal(false);
            }
            if (settingsModalRef.current && 
                settingsButtonRef.current && 
                !settingsModalRef.current.contains(event.target) && 
                !settingsButtonRef.current.contains(event.target)) {
                setShowSettingsModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getPageTitle = () => {
        if (location.pathname === '/welcome') {
            return 'Bine ați venit';
        }
        const currentPage = config.pages.find(page => page.path === location.pathname);
        return currentPage ? currentPage.name : config.pages[0].name;
    };

    const handleBack = () => {
        navigate(-1);
    };

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
        setShowSettingsModal(false);
    };

    const toggleSettingsModal = () => {
        setShowSettingsModal(!showSettingsModal);
        setShowProfileModal(false);
    };

    const renderMobileTopBar = () => (
        <div className="fixed-top d-block d-md-none" 
             style={{ 
                 height: 'min(56px, 8vh)', 
                 boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
                 borderBottom: '1px solid rgba(0,0,0,0.08)',
                 zIndex: 1040,
                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff'
             }}>
            <div className="d-flex align-items-center justify-content-between h-100 px-3">
                <button onClick={handleBack} 
                        className="btn d-flex align-items-center gap-2 p-0 border-0">
                    <div className="d-flex align-items-center justify-content-center rounded-2"
                         style={{ 
                             width: '32px', 
                             height: '32px',
                             color: isDarkMode ? '#ffffff' : '#000000',
                             opacity: 0.75
                         }}>
                        <i className="bi bi-chevron-left fs-4"></i>
                    </div>
                    <span className="fw-medium" style={{ 
                        fontSize: '14px',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        opacity: 0.75
                    }}>Back</span>
                </button>
                
                <Link to="/welcome" className="text-decoration-none">
                    <h6 className="mb-0 fw-semibold" style={{ 
                        color: isDarkMode ? '#ffffff' : '#000000'
                    }}>{getPageTitle()}</h6>
                </Link>
                
                <div className="d-flex gap-2">
                    <Link to="/welcome" className={`nav-link p-0 ${location.pathname === '/welcome' ? '' : 'opacity-75'}`}
                        style={{ 
                            color: location.pathname === '/welcome' 
                                ? config.styles.primaryColor 
                                : isDarkMode ? '#ffffff' : '#000000'
                        }}>
                        <div className="rounded-2 d-flex align-items-center justify-content-center" 
                             style={{ 
                                backgroundColor: location.pathname === '/welcome' 
                                    ? `${config.styles.primaryColor}14` 
                                    : 'transparent',
                                width: '32px', 
                                height: '32px' 
                             }}>
                            <i className="bi bi-house-fill fs-5"></i>
                        </div>
                    </Link>
                    <button ref={settingsButtonRef} onClick={toggleSettingsModal}
                            className={`btn p-0 position-relative rounded-2 d-flex align-items-center justify-content-center ${showSettingsModal ? '' : 'opacity-75'}`}
                            style={{ 
                                color: showSettingsModal 
                                    ? config.styles.primaryColor 
                                    : isDarkMode ? '#ffffff' : '#000000',
                                backgroundColor: showSettingsModal 
                                    ? `${config.styles.primaryColor}14` 
                                    : 'transparent',
                                width: '32px', 
                                height: '32px',
                                border: 'none'
                            }}>
                        <i className="bi bi-gear-fill fs-5"></i>
                        <SettingsModal 
                            show={showSettingsModal} 
                            modalRef={settingsModalRef} 
                            config={config}
                            isDarkMode={isDarkMode}
                            onToggleDarkMode={onToggleDarkMode}
                        />
                    </button>
                    <button ref={profileButtonRef} onClick={toggleProfileModal}
                            className={`btn p-0 position-relative rounded-2 d-flex align-items-center justify-content-center ${showProfileModal ? '' : 'opacity-75'}`}
                            style={{ 
                                color: showProfileModal 
                                    ? config.styles.primaryColor 
                                    : isDarkMode ? '#ffffff' : '#000000',
                                backgroundColor: showProfileModal 
                                    ? `${config.styles.primaryColor}14` 
                                    : 'transparent',
                                width: '32px', 
                                height: '32px',
                                border: 'none'
                            }}>
                        <i className="bi bi-person-circle fs-5"></i>
                        <ProfileModal 
                            show={showProfileModal} 
                            modalRef={profileModalRef} 
                            config={config}
                            isDarkMode={isDarkMode}
                        />
                    </button>
                </div>
            </div>
        </div>
    );

    const renderDesktopTopBar = () => (
        <div className="fixed-top d-none d-md-block w-100" 
             style={{ 
                 height: 'min(56px, 8vh)', 
                 boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
                 borderBottom: '1px solid rgba(0,0,0,0.08)',
                 zIndex: 1040,
                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff'
             }}>
            <div className="d-flex align-items-center h-100" 
                 style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <Link to="/welcome" className="text-decoration-none">
                    <h5 className="mb-0 fw-bold" style={{ color: config.styles.primaryColor }}>{config.appName}</h5>
                </Link>
            </div>
            <div className="d-flex align-items-center h-100 position-absolute" 
                 style={{ left: '220px', right: 0, top: 0, paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <h5 className="mb-0 fw-semibold" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{getPageTitle()}</h5>
                <div className="ms-auto d-flex align-items-center gap-2">
                    <Link to="/welcome" className={`nav-link p-0 ${location.pathname === '/welcome' ? '' : 'opacity-75'}`}
                        style={{ 
                            color: location.pathname === '/welcome' 
                                ? config.styles.primaryColor 
                                : isDarkMode ? '#ffffff' : '#000000'
                        }}>
                        <div className="rounded-2 d-flex align-items-center justify-content-center" 
                             style={{ 
                                backgroundColor: location.pathname === '/welcome' 
                                    ? `${config.styles.primaryColor}14` 
                                    : 'transparent',
                                width: '32px', 
                                height: '32px' 
                             }}>
                            <i className="bi bi-house-fill fs-5"></i>
                        </div>
                    </Link>
                    <button ref={settingsButtonRef} onClick={toggleSettingsModal}
                            className={`btn p-0 position-relative rounded-2 d-flex align-items-center justify-content-center ${showSettingsModal ? '' : 'opacity-75'}`}
                            style={{ 
                                color: showSettingsModal 
                                    ? config.styles.primaryColor 
                                    : isDarkMode ? '#ffffff' : '#000000',
                                backgroundColor: showSettingsModal 
                                    ? `${config.styles.primaryColor}14` 
                                    : 'transparent',
                                width: '32px', 
                                height: '32px',
                                border: 'none'
                            }}>
                        <i className="bi bi-gear-fill fs-5"></i>
                        <SettingsModal 
                            show={showSettingsModal} 
                            modalRef={settingsModalRef} 
                            config={config}
                            isDarkMode={isDarkMode}
                            onToggleDarkMode={onToggleDarkMode}
                        />
                    </button>
                    <button ref={profileButtonRef} onClick={toggleProfileModal}
                            className={`btn position-relative d-flex align-items-center gap-2 rounded-2 ${showProfileModal ? '' : 'opacity-75'}`}
                            style={{ 
                                color: showProfileModal 
                                    ? config.styles.primaryColor 
                                    : isDarkMode ? '#ffffff' : '#000000',
                                backgroundColor: showProfileModal 
                                    ? `${config.styles.primaryColor}14` 
                                    : 'transparent',
                                border: 'none',
                                padding: '6px 12px'
                            }}>
                        <div className="d-flex align-items-center justify-content-center">
                            <i className="bi bi-person-circle fs-5"></i>
                        </div>
                        <span className="fw-medium" style={{ 
                            fontSize: '14px',
                            color: isDarkMode ? '#ffffff' : '#000000'
                        }}>
                            {isUserAuthenticated() ? 'Ion Popescu' : 'Bine ați venit'}
                        </span>
                        <ProfileModal 
                            show={showProfileModal} 
                            modalRef={profileModalRef} 
                            config={config}
                            isDarkMode={isDarkMode}
                        />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {renderMobileTopBar()}
            {renderDesktopTopBar()}
        </>
    );
};

export default TopBar; 