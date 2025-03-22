import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const MobileTopBar = () => {
        const location = useLocation();
        const navigate = useNavigate();
        const getPageTitle = () => {
            switch(location.pathname) {
                case '/': return 'Dashboard';
                case '/search': return 'Search';
                case '/analytics': return 'Analytics';
                case '/history': return 'History';
                case '/notifications': return 'Notifications';
                case '/settings': return 'Settings';
                case '/profile': return 'Profile';
                default: return 'Dashboard';
            }
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
                                 style={{ width: '32px', height: '32px' }}>
                                <i className="bi bi-gear fs-5"></i>
                            </div>
                        </Link>
                        <Link to="/profile" className="text-decoration-none">
                            <div className={`rounded-circle d-flex align-items-center justify-content-center text-white`}
                                 style={{ width: '32px', height: '32px', backgroundColor: location.pathname === '/profile' ? '#0d6efd' : '#ff6b4a' }}>
                                <i className="bi bi-person-fill fs-5"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const DesktopPageTitle = () => {
        const location = useLocation();
        const getPageTitle = () => {
            switch(location.pathname) {
                case '/': return 'Dashboard';
                case '/search': return 'Search';
                case '/analytics': return 'Analytics';
                case '/history': return 'History';
                case '/notifications': return 'Notifications';
                case '/settings': return 'Settings';
                case '/profile': return 'Profile';
                default: return 'Dashboard';
            }
        };

        return (
            <div className="d-none d-md-block position-fixed start-50 translate-middle-x" 
                 style={{ 
                     top: '20px',
                     zIndex: 1000
                 }}>
                <div className="bg-white px-4 py-2 rounded-pill" 
                     style={{ 
                         minWidth: '160px',
                         boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                     }}>
                    <h6 className="mb-0 fw-semibold text-center">{getPageTitle()}</h6>
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
                        <h5 className="mb-0 fw-semibold text-primary">
                            <i className="bi bi-boxes me-2 fs-5"></i>
                            CDI
                        </h5>
                    </div>

                    {/* Menu Container */}
                    <div className="bg-white rounded-3 d-flex align-items-center justify-content-center" style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '56px',
                        padding: '0 10px'
                    }}>
                        <ul className="nav d-flex align-items-center gap-2 m-0">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 ${location.pathname === '/' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-grid-1x2-fill fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/search" className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 ${location.pathname === '/search' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-search fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>Search</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/analytics" className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 ${location.pathname === '/analytics' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-bar-chart-line fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>Analytics</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/history" className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 ${location.pathname === '/history' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-clock-history fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>History</span>
                                </Link>
                            </li>
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
                                <div className={`d-flex align-items-center justify-content-center rounded-2 ${location.pathname === '/settings' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                     style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-gear fs-5"></i>
                                </div>
                            </Link>
                            <Link to="/profile" className="text-decoration-none">
                                <div className={`d-flex align-items-center justify-content-center rounded-circle text-white`}
                                     style={{ width: '32px', height: '32px', backgroundColor: location.pathname === '/profile' ? '#0d6efd' : '#ff6b4a' }}>
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
                    <li className="nav-item text-center">
                        <Link to="/" className={`nav-link p-0 ${location.pathname === '/' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" 
                                 style={{ backgroundColor: location.pathname === '/' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-grid-1x2-fill fs-5"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/search" className={`nav-link p-0 ${location.pathname === '/search' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" 
                                 style={{ backgroundColor: location.pathname === '/search' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-search fs-5"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/analytics" className={`nav-link p-0 ${location.pathname === '/analytics' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" 
                                 style={{ backgroundColor: location.pathname === '/analytics' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-bar-chart-line fs-5"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/history" className={`nav-link p-0 ${location.pathname === '/history' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" 
                                 style={{ backgroundColor: location.pathname === '/history' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-clock-history fs-5"></i>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };

    const HomePage = () => <div></div>;
    const SearchPage = () => <div></div>;
    const AnalyticsPage = () => <div></div>;
    const HistoryPage = () => <div></div>;
    const NotificationsPage = () => <div></div>;
    const SettingsPage = () => <div></div>;
    const ProfilePage = () => <div></div>;

    return (
        <Router>
            <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#f5f9ff' }}>
                <MobileTopBar />
                <DesktopPageTitle />
                <DesktopBottomBar />
                <BottomBar />
                <div className="d-none d-md-block flex-grow-1">
                    <div className="container-fluid p-4">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/analytics" element={<AnalyticsPage />} />
                            <Route path="/history" element={<HistoryPage />} />
                            <Route path="/notifications" element={<NotificationsPage />} />
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                        </Routes>
                    </div>
                </div>
                <div className="d-md-none flex-grow-1" 
                     style={{ marginTop: '56px', marginBottom: '56px' }}>
                    <div className="container-fluid p-3">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/analytics" element={<AnalyticsPage />} />
                            <Route path="/history" element={<HistoryPage />} />
                            <Route path="/notifications" element={<NotificationsPage />} />
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
