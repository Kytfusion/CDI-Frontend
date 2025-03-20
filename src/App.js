import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const BottomBar = () => {
        const location = useLocation();
        return (
            <nav className="navbar fixed-bottom d-md-none p-3 bg-white shadow-lg rounded-top">
                <ul className="nav w-100 d-flex justify-content-around align-items-center">
                    <li className="nav-item text-center">
                        <Link to="/" className={`nav-link p-0 ${location.pathname === '/' ? 'text-primary' : 'text-secondary'}`}>
                            <div className="rounded-circle p-2" style={{ backgroundColor: location.pathname === '/' ? 'rgba(0, 123, 255, 0.1)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-house-fill fs-5"></i>
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
                                <i className="bi bi-pie-chart fs-5"></i>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link to="/history" className={`nav-link p-0 ${location.pathname === '/history' ? 'text-primary' : 'text-secondary'}`}>
                            <div className="rounded-circle p-2" style={{ backgroundColor: location.pathname === '/history' ? 'rgba(0, 123, 255, 0.1)' : 'transparent', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <i className="bi bi-clock fs-5"></i>
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
            <div style={{ paddingBottom: '60px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
                <BottomBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
