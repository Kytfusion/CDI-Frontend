import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const Sidebar = () => {
        const location = useLocation();
        return (
            <div className="d-none d-md-block bg-white text-dark vh-100 p-3 shadow-lg" style={{ width: '250px', position: 'fixed' }}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link text-dark d-flex align-items-center ${location.pathname === '/' ? 'bg-primary text-white rounded' : ''}`}>
                            <i className="bi bi-grid-1x2-fill me-2 fs-5"></i> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className={`nav-link text-dark d-flex align-items-center ${location.pathname === '/search' ? 'bg-primary text-white rounded' : ''}`}>
                            <i className="bi bi-search me-2 fs-5"></i> Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/analytics" className={`nav-link text-dark d-flex align-items-center ${location.pathname === '/analytics' ? 'bg-primary text-white rounded' : ''}`}>
                            <i className="bi bi-bar-chart-line me-2 fs-5"></i> Analytics
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/history" className={`nav-link text-dark d-flex align-items-center ${location.pathname === '/history' ? 'bg-primary text-white rounded' : ''}`}>
                            <i className="bi bi-clock-history me-2 fs-5"></i> History
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const BottomBar = () => {
        const location = useLocation();
        return (
            <nav className="navbar fixed-bottom d-md-none p-3 bg-white shadow-lg rounded-top">
                <ul className="nav w-100 d-flex justify-content-around align-items-center">
                    <li className="nav-item text-center">
                        <Link to="/" className={`nav-link p-0 ${location.pathname === '/' ? 'text-primary' : 'text-secondary'}`}>
                            <div className="rounded-circle p-2" style={{ backgroundColor: location.pathname === '/' ? 'rgba(0, 123, 255, 0.1)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-grid-1x2-fill fs-5"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/search" className={`nav-link p-0 ${location.pathname === '/search' ? 'text-primary' : 'text-secondary'}`}>
                            <div className="rounded-circle p-2" style={{ backgroundColor: location.pathname === '/search' ? 'rgba(0, 123, 255, 0.1)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-search fs-5"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/analytics" className={`nav-link p-0 ${location.pathname === '/analytics' ? 'text-primary' : 'text-secondary'}`}>
                            <div className="rounded-circle p-2" style={{ backgroundColor: location.pathname === '/analytics' ? 'rgba(0, 123, 255, 0.1)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-bar-chart-line fs-5"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/history" className={`nav-link p-0 ${location.pathname === '/history' ? 'text-primary' : 'text-secondary'}`}>
                            <div className="rounded-circle p-2" style={{ backgroundColor: location.pathname === '/history' ? 'rgba(0, 123, 255, 0.1)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-clock-history fs-5"></i>
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
                <Sidebar />
                <BottomBar />
                <div style={{ marginLeft: '250px', padding: '20px' }} className="d-none d-md-block">
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
