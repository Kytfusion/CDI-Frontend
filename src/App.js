import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getConfig } from './config';

function App() {
    const config = getConfig(process.env.REACT_APP_CONFIG_TYPE);
    const { primaryColor } = config.styles;

    const MobileTopBar = () => {
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
            <div className="d-md-none fixed-top bg-white" style={{ height: '56px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
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
                    
                    <div className="d-flex align-items-center gap-1">
                        <Link to="/settings" className="text-decoration-none">
                            <div className={`d-flex align-items-center justify-content-center rounded-2 ${location.pathname === '/settings' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                 style={{ width: '32px', height: '32px', backgroundColor: location.pathname === '/settings' ? primaryColor : 'transparent' }}>
                                <i className="bi bi-gear fs-5"></i>
                            </div>
                        </Link>
                        <Link to="/profile" className="text-decoration-none">
                            <div className={`d-flex align-items-center justify-content-center rounded-circle text-white`}
                                 style={{ width: '32px', height: '32px', backgroundColor: location.pathname === '/profile' ? config.styles.primaryColor : '#ff6b4a' }}>
                                <i className="bi bi-person-fill fs-5"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const DesktopBottomBar = () => {
        const location = useLocation();
        return (
            <div className="d-none d-md-block" style={{ position: 'fixed', bottom: '20px', width: '100%', zIndex: 1000 }}>
                <div className="d-flex justify-content-center gap-3">
                    {/* Logo Container */}
                    <div className="bg-white rounded-3 d-flex align-items-center justify-content-center" style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '56px',
                        padding: '0 24px',
                        width: '120px'
                    }}>
                        <h5 className="mb-0 fw-semibold" style={{ color: config.styles.primaryColor }}>
                            {config.appName}
                        </h5>
                    </div>

                    {/* Menu Container */}
                    <div className="bg-white rounded-3 d-flex align-items-center justify-content-center" style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '56px',
                        padding: '0 10px'
                    }}>
                        <ul className="nav d-flex align-items-center gap-2 m-0">
                            {config.pages.map((page, index) => (
                                <li key={index} className="nav-item">
                                    <Link to={page.path} className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 ${location.pathname === page.path ? '' : 'text-dark opacity-75'}`}
                                         style={{ 
                                             backgroundColor: location.pathname === page.path ? `${config.styles.primaryColor}14` : 'transparent',
                                             color: location.pathname === page.path ? config.styles.primaryColor : undefined
                                         }}>
                                        <i className={`bi ${page.icon} fs-5`}></i>
                                        <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>{page.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Controls Container */}
                    <div className="bg-white rounded-3 d-flex align-items-center justify-content-center" style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '56px',
                        padding: '0 24px',
                        width: '120px'
                    }}>
                        <div className="d-flex align-items-center gap-2">
                            <Link to="/settings" className="text-decoration-none">
                                <div className={`d-flex align-items-center justify-content-center rounded-2 ${location.pathname === '/settings' ? 'text-white' : 'text-dark opacity-75'}`}
                                     style={{ width: '32px', height: '32px', backgroundColor: location.pathname === '/settings' ? config.styles.primaryColor : 'transparent' }}>
                                    <i className="bi bi-gear fs-5"></i>
                                </div>
                            </Link>
                            <Link to="/profile" className="text-decoration-none">
                                <div className={`d-flex align-items-center justify-content-center rounded-circle text-white`}
                                     style={{ width: '32px', height: '32px', backgroundColor: location.pathname === '/profile' ? config.styles.primaryColor : '#ff6b4a' }}>
                                    <i className="bi bi-person-fill fs-5"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const BottomBar = () => {
        const location = useLocation();
        return (
            <nav className="navbar fixed-bottom d-md-none bg-white" style={{ height: '56px', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
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

    const PageTemplate = ({ children }) => {
        return (
            <div className="h-100">
                <div className="bg-white rounded-3 h-100 d-flex flex-column" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {children}
                </div>
            </div>
        );
    };

    const DynamicPage = ({ content }) => (
        <PageTemplate>
            <div className="p-3">
                {content}
            </div>
        </PageTemplate>
    );

    const SettingsPage = () => (
        <PageTemplate>
            <div className="p-3">
                Settings Content
            </div>
        </PageTemplate>
    );

    const ProfilePage = () => (
        <PageTemplate>
            <div className="p-3">
                Profile Content
            </div>
        </PageTemplate>
    );

    const MainContent = () => (
        <>
            <div className="d-none d-md-block" style={{ 
                position: 'fixed',
                top: '20px',
                bottom: '86px',
                left: 0,
                right: 0,
                overflow: 'auto'
            }}>
                <div className="container-fluid h-100 py-3">
                    <div className="px-4 h-100">
                        <Routes>
                            <Route path="/" element={<Navigate to={config.pages[0].path} replace />} />
                            {config.pages.map((page, index) => (
                                <Route 
                                    key={index} 
                                    path={page.path} 
                                    element={<DynamicPage content={page.content} />} 
                                />
                            ))}
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <div className="d-md-none" style={{ 
                position: 'fixed',
                top: '56px',
                bottom: '56px',
                left: 0,
                right: 0,
                overflow: 'auto'
            }}>
                <div className="container-fluid h-100 py-3 px-3">
                    <Routes>
                        <Route path="/" element={<Navigate to={config.pages[0].path} replace />} />
                        {config.pages.map((page, index) => (
                            <Route 
                                key={index} 
                                path={page.path} 
                                element={<DynamicPage content={page.content} />} 
                            />
                        ))}
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </div>
            </div>
        </>
    );

    return (
        <Router>
            <div className="min-vh-100" style={{ backgroundColor: '#f5f9ff' }}>
                <MobileTopBar />
                <DesktopBottomBar />
                <BottomBar />
                <MainContent />
            </div>
        </Router>
    );
}

export default App;