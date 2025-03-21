import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const TopBar = () => {
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
            <div className="d-none d-md-flex fixed-top bg-white" style={{ height: '70px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="d-flex align-items-center px-4" style={{ width: '250px', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
                    <h5 className="mb-0 fw-semibold text-primary">
                        <i className="bi bi-boxes me-2 fs-5"></i>
                        CDI
                    </h5>
                </div>
                <div className="d-flex flex-grow-1 align-items-center px-4">
                    <h6 className="mb-0 fw-semibold text-dark">{getPageTitle()}</h6>
                    <div className="ms-auto d-flex align-items-center gap-2">
                        <Link to="/notifications" className="text-decoration-none">
                            <div className={`d-flex align-items-center justify-content-center rounded-2 ${location.pathname === '/notifications' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                 style={{ width: '40px', height: '40px' }}>
                                <div className="position-relative">
                                    <i className="bi bi-bell"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px', padding: '0.35em 0.5em' }}>
                                        2
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/settings" className="text-decoration-none">
                            <div className={`d-flex align-items-center justify-content-center rounded-2 ${location.pathname === '/settings' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                 style={{ width: '40px', height: '40px' }}>
                                <i className="bi bi-gear"></i>
                            </div>
                        </Link>
                        <Link to="/profile" className="text-decoration-none">
                            <div className={`d-flex align-items-center gap-2 rounded-2 px-3 py-2 ${location.pathname === '/profile' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                <div className={`rounded-circle d-flex align-items-center justify-content-center ${location.pathname === '/profile' ? 'bg-white text-primary' : 'bg-primary text-white'}`}
                                     style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-person-fill"></i>
                                </div>
                                <span className="fw-medium">John Doe</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

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
                        <Link to="/notifications" className="text-decoration-none">
                            <div className={`d-flex align-items-center justify-content-center rounded-2 ${location.pathname === '/notifications' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                 style={{ width: '32px', height: '32px' }}>
                                <div className="position-relative">
                                    <i className="bi bi-bell"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '8px', padding: '0.35em 0.5em' }}>
                                        2
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/settings" className="text-decoration-none">
                            <div className={`d-flex align-items-center justify-content-center rounded-2 ${location.pathname === '/settings' ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                 style={{ width: '32px', height: '32px' }}>
                                <i className="bi bi-gear"></i>
                            </div>
                        </Link>
                        <Link to="/profile" className="text-decoration-none">
                            <div className={`rounded-circle d-flex align-items-center justify-content-center ${location.pathname === '/profile' ? 'bg-primary text-white' : 'bg-primary text-white'}`}
                                 style={{ width: '32px', height: '32px' }}>
                                <i className="bi bi-person-fill"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const Sidebar = () => {
        const location = useLocation();
        return (
            <div className="d-none d-md-block bg-white vh-100" 
                 style={{ width: '250px', position: 'fixed', top: '70px', borderRight: '1px solid rgba(0,0,0,0.08)', boxShadow: '2px 0 8px rgba(0,0,0,0.03)' }}>
                <ul className="nav flex-column p-2">
                    <li className="nav-item mb-1">
                        <Link to="/" className={`nav-link d-flex align-items-center px-3 py-2 ${location.pathname === '/' ? 'bg-primary text-white rounded-2' : 'text-dark opacity-75 rounded-2'}`}>
                            <i className="bi bi-grid-1x2-fill me-3"></i>
                            <span className="fw-medium">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-1">
                        <Link to="/search" className={`nav-link d-flex align-items-center px-3 py-2 ${location.pathname === '/search' ? 'bg-primary text-white rounded-2' : 'text-dark opacity-75 rounded-2'}`}>
                            <i className="bi bi-search me-3"></i>
                            <span className="fw-medium">Search</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-1">
                        <Link to="/analytics" className={`nav-link d-flex align-items-center px-3 py-2 ${location.pathname === '/analytics' ? 'bg-primary text-white rounded-2' : 'text-dark opacity-75 rounded-2'}`}>
                            <i className="bi bi-bar-chart-line me-3"></i>
                            <span className="fw-medium">Analytics</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-1">
                        <Link to="/history" className={`nav-link d-flex align-items-center px-3 py-2 ${location.pathname === '/history' ? 'bg-primary text-white rounded-2' : 'text-dark opacity-75 rounded-2'}`}>
                            <i className="bi bi-clock-history me-3"></i>
                            <span className="fw-medium">History</span>
                        </Link>
                    </li>
                </ul>
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
                            <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: location.pathname === '/' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-grid-1x2-fill"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/search" className={`nav-link p-0 ${location.pathname === '/search' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: location.pathname === '/search' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-search"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/analytics" className={`nav-link p-0 ${location.pathname === '/analytics' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: location.pathname === '/analytics' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-bar-chart-line"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/history" className={`nav-link p-0 ${location.pathname === '/history' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: location.pathname === '/history' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-clock-history"></i>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };

    const HomePage = () => <div>Home Page</div>;
    const SearchPage = () => <div>Search Page</div>;
    const AnalyticsPage = () => <div>Analytics Page</div>;
    const HistoryPage = () => <div>History Page</div>;
    const NotificationsPage = () => <div>Notifications Page</div>;
    const SettingsPage = () => <div>Settings Page</div>;
    const ProfilePage = () => <div>Profile Page</div>;

    return (
        <Router>
            <div className="min-vh-100 bg-light d-flex flex-column">
                <TopBar />
                <MobileTopBar />
                <Sidebar />
                <BottomBar />
                <div className="d-none d-md-block flex-grow-1" 
                     style={{ marginLeft: '250px', marginTop: '70px' }}>
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
