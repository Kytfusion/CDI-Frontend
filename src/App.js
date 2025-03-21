import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
                default: return 'Dashboard';
            }
        };

        return (
            <div className="d-none d-md-flex fixed-top bg-white border-bottom" style={{ height: '50px', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
                <div className="d-flex align-items-center px-4" style={{ width: '250px', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
                    <h5 className="mb-0 fw-semibold text-primary">
                        <i className="bi bi-boxes me-2"></i>
                        CDI
                    </h5>
                </div>
                <div className="d-flex flex-grow-1 align-items-center px-4 py-2">
                    <h6 className="mb-0 fw-semibold text-dark">{getPageTitle()}</h6>
                    <div className="ms-auto d-flex align-items-center gap-4">
                        <div className="position-relative">
                            <i className="bi bi-bell text-dark opacity-75"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                                2
                            </span>
                        </div>
                        <i className="bi bi-gear text-dark opacity-75"></i>
                        <div className="d-flex align-items-center gap-2">
                            <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" 
                                 style={{ width: '32px', height: '32px' }}>
                                <i className="bi bi-person-fill text-white small"></i>
                            </div>
                            <span className="text-dark opacity-75 fw-medium">John Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const Sidebar = () => {
        const location = useLocation();
        return (
            <div className="d-none d-md-block bg-white vh-100" 
                 style={{ width: '250px', position: 'fixed', top: '50px', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
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
            <nav className="navbar fixed-bottom d-md-none bg-white" style={{ boxShadow: '0 -2px 4px rgba(0,0,0,0.08)' }}>
                <ul className="nav w-100 d-flex justify-content-around align-items-center p-2">
                    <li className="nav-item text-center">
                        <Link to="/" className={`nav-link p-0 ${location.pathname === '/' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 p-2" style={{ backgroundColor: location.pathname === '/' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-grid-1x2-fill"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/search" className={`nav-link p-0 ${location.pathname === '/search' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 p-2" style={{ backgroundColor: location.pathname === '/search' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-search"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/analytics" className={`nav-link p-0 ${location.pathname === '/analytics' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 p-2" style={{ backgroundColor: location.pathname === '/analytics' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-bar-chart-line"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/history" className={`nav-link p-0 ${location.pathname === '/history' ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="rounded-2 p-2" style={{ backgroundColor: location.pathname === '/history' ? 'rgba(13,110,253,0.08)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-clock-history"></i>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };

    const HomePage = () => <div className="container p-4">Home Page</div>;
    const SearchPage = () => <div className="container p-4">Search Page</div>;
    const AnalyticsPage = () => <div className="container p-4">Analytics Page</div>;
    const HistoryPage = () => <div className="container p-4">History Page</div>;

    return (
        <Router>
            <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
                <TopBar />
                <Sidebar />
                <BottomBar />
                <div style={{ marginLeft: '250px', marginTop: '50px', padding: '20px' }} className="d-none d-md-block">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                    </Routes>
                </div>
                <div style={{ paddingBottom: '60px' }} className="d-md-none">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
