import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
        <Router>
            <div>
                {/* Versiunea Desktop - Sidebar în stânga */}
                <div className="d-none d-md-block bg-dark text-white vh-100 p-3" style={{ width: '250px', position: 'fixed' }}>
                    <h4 className="text-center mb-4">CDI Dashboard</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-house me-2"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/analytics" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-bar-chart me-2"></i> Analytics
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-people me-2"></i> Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-gear me-2"></i> Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-box-arrow-right me-2"></i> Logout
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Versiunea Mobile - Bottom bar jos */}
                <nav className="navbar navbar-dark bg-dark fixed-bottom d-md-none p-0">
                    <ul className="nav w-100 d-flex justify-content-around">
                        <li className="nav-item text-center">
                            <Link to="/" className="nav-link text-white p-2 d-flex flex-column align-items-center" aria-label="Home">
                                <i className="bi bi-house fs-5"></i>
                                <span className="small">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to="/analytics" className="nav-link text-white p-2 d-flex flex-column align-items-center" aria-label="Analytics">
                                <i className="bi bi-bar-chart fs-5"></i>
                                <span className="small">Analytics</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to="/users" className="nav-link text-white p-2 d-flex flex-column align-items-center" aria-label="Users">
                                <i className="bi bi-people fs-5"></i>
                                <span className="small">Users</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to="/settings" className="nav-link text-white p-2 d-flex flex-column align-items-center" aria-label="Settings">
                                <i className="bi bi-gear fs-5"></i>
                                <span className="small">Settings</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to="/" className="nav-link text-white p-2 d-flex flex-column align-items-center" aria-label="Logout">
                                <i className="bi bi-box-arrow-right fs-5"></i>
                                <span className="small">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Conținutul principal */}
                <div style={{ marginLeft: '250px', padding: '20px' }} className="d-none d-md-block">
                    <Routes>
                        <Route path="/" element={<div className="container p-4"><h2>Home</h2><p>Bine ai venit pe pagina principală a CDI Dashboard!</p></div>} />
                        <Route path="/analytics" element={<div className="container p-4"><h2>Analytics</h2><p>Aici vei vedea statistici și grafice.</p></div>} />
                        <Route path="/users" element={<div className="container p-4"><h2>Users</h2><p>Aici vei gestiona utilizatorii aplicației.</p></div>} />
                        <Route path="/settings" element={<div className="container p-4"><h2>Settings</h2><p>Aici poți configura setările aplicației.</p></div>} />
                    </Routes>
                </div>
                <div style={{ paddingBottom: '70px', minHeight: '100vh' }} className="d-md-none">
                    <Routes>
                        <Route path="/" element={<div className="container p-4"><h2>Home</h2><p>Bine ai venit pe pagina principală a CDI Dashboard!</p></div>} />
                        <Route path="/analytics" element={<div className="container p-4"><h2>Analytics</h2><p>Aici vei vedea statistici și grafice.</p></div>} />
                        <Route path="/users" element={<div className="container p-4"><h2>Users</h2><p>Aici vei gestiona utilizatorii aplicației.</p></div>} />
                        <Route path="/settings" element={<div className="container p-4"><h2>Settings</h2><p>Aici poți configura setările aplicației.</p></div>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
