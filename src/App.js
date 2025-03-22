import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Adăugăm stilurile pentru Masonry
const masonryStyles = {
    '.my-masonry-grid': {
        display: 'flex',
        marginLeft: '-40px',
        width: 'auto'
    },
    '.my-masonry-grid_column': {
        paddingLeft: '40px',
        backgroundClip: 'padding-box'
    },
    '.my-masonry-grid_column > div': {
        marginBottom: '40px',
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
    },
    '.my-masonry-grid_column > div:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    },
    '@media (max-width: 768px)': {
        '.my-masonry-grid': {
            marginLeft: '-16px'
        },
        '.my-masonry-grid_column': {
            paddingLeft: '16px'
        },
        '.my-masonry-grid_column > div': {
            marginBottom: '16px',
            padding: '16px',
            borderRadius: '12px'
        }
    }
};

// Adăugăm stilurile în document
const styleSheet = document.createElement('style');
styleSheet.textContent = Object.entries(masonryStyles).map(([selector, rules]) => 
    `${selector} {${Object.entries(rules).map(([prop, value]) => `${prop}: ${value};`).join('')}}`
).join('') + `
    .widget-container {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: '0 4px 12px rgba(0,0,0,0.1)';
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    .widget-container:hover {
        transform: translateY(-2px);
        box-shadow: '0 4px 12px rgba(0,0,0,0.15)';
    }
`;
document.head.appendChild(styleSheet);

function App() {
    const [activeWidgets, setActiveWidgets] = useState({
        systemResources: true,
        performance: true,
        settings: false,
        profile: false
    });

    const TopBar = () => {
        const handleClick = (widget) => {
            setActiveWidgets(prev => ({
                ...prev,
                [widget]: !prev[widget]
            }));
        };

        return (
            <div className="position-fixed top-0 start-0 w-100" style={{ zIndex: 1000 }}>
                <style>
                    {`
                        :root {
                            --header-item-bg: white;
                            --header-item-radius: 12px;
                            --header-item-shadow: 0 4px 12px rgba(0,0,0,0.1);
                            --header-item-padding: 0.75rem;
                            --header-item-height: 44px;
                        }
                        .header-item {
                            background: var(--header-item-bg);
                            border-radius: var(--header-item-radius);
                            box-shadow: var(--header-item-shadow);
                            height: var(--header-item-height);
                            display: inline-flex;
                            align-items: center;
                        }
                        .header-btn {
                            padding: 0 var(--header-item-padding);
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: none;
                            background: none;
                            color: inherit;
                            cursor: pointer;
                            transition: color 0.2s;
                        }
                        .header-btn:hover {
                            color: var(--bs-primary);
                        }
                    `}
                </style>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center p-3 gap-3">
                        {/* Logo și Titlu */}
                        <div className="header-item px-4">
                            <h5 className="mb-0 fw-semibold">CDI</h5>
                        </div>

                        {/* Setări și Profil */}
                        <div className="header-item">
                            <button onClick={() => handleClick('settings')}
                                    className={`header-btn ${activeWidgets.settings ? 'text-primary' : 'text-dark opacity-75'}`}>
                                <i className="bi bi-gear fs-5"></i>
                            </button>
                            <button onClick={() => handleClick('profile')}
                                    className={`header-btn ${activeWidgets.profile ? 'text-primary' : 'text-dark opacity-75'}`}>
                                <i className="bi bi-person-circle fs-5"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const BottomBar = () => {
        const handleClick = (widget) => {
            setActiveWidgets(prev => ({
                ...prev,
                [widget]: !prev[widget]
            }));
        };

        return (
            <div className="position-fixed bottom-0 start-0 w-100" style={{ zIndex: 1000 }}>
                <div className="d-flex justify-content-center p-3">
                    <div className="bg-white rounded-3" style={{ 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '48px',
                        overflow: 'hidden'
                    }}>
                        <style>
                            {`
                                .menu-container {
                                    height: 100%;
                                    overflow-x: auto;
                                    scrollbar-width: none;
                                    -ms-overflow-style: none;
                                }
                                .menu-container::-webkit-scrollbar {
                                    display: none;
                                }
                                .nav-item {
                                    margin-right: 4px;
                                }
                                .nav-item:last-child {
                                    margin-right: 0;
                                }
                                @media (max-width: 768px) {
                                    .bg-white.rounded-3 {
                                        width: 100%;
                                    }
                                    .menu-container {
                                        padding: 0 8px;
                                    }
                                    .nav {
                                        justify-content: space-between !important;
                                        width: 100%;
                                    }
                                    .menu-text {
                                        display: none;
                                    }
                                }
                            `}
                        </style>
                        <div className="menu-container">
                            <ul className="nav d-flex align-items-center h-100 px-2">
                                <li className="nav-item">
                                    <button onClick={() => handleClick('systemResources')} 
                                            className={`nav-link d-flex align-items-center px-3 py-2 rounded-2 border-0 ${activeWidgets.systemResources ? 'text-primary' : 'text-dark opacity-75'}`}
                                            style={{ height: '40px' }}>
                                        <i className="bi bi-cpu"></i>
                                        <span className="menu-text fw-medium ms-2" style={{ fontSize: '14px' }}>Resurse</span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => handleClick('performance')}
                                            className={`nav-link d-flex align-items-center px-3 py-2 rounded-2 border-0 ${activeWidgets.performance ? 'text-primary' : 'text-dark opacity-75'}`}
                                            style={{ height: '40px' }}>
                                        <i className="bi bi-speedometer2"></i>
                                        <span className="menu-text fw-medium ms-2" style={{ fontSize: '14px' }}>Performanță</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const HomePage = () => null;
    const AnalyticsPage = () => null;
    const SettingsPage = () => null;
    const ProfilePage = () => null;

    const BankCardWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out' }}>
            <h5 className="mb-4 fw-semibold">Resurse Sistem</h5>
            <div className="card bg-primary text-white rounded-4" style={{ maxWidth: '360px' }}>
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <p className="mb-0 opacity-75" style={{ fontSize: '14px' }}>Încărcare Sistem</p>
                            <h3 className="mb-0 fw-semibold">1.25</h3>
                        </div>
                        <i className="bi bi-speedometer2 fs-1"></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                        <div>
                            <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Procese</p>
                            <h6 className="mb-0 fw-semibold">124 active</h6>
                        </div>
                        <div className="text-end">
                            <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Threads</p>
                            <h6 className="mb-0 fw-semibold">1,245</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const AnalyticsChartWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out' }}>
            <h5 className="mb-4 fw-semibold">Performanță Sistem</h5>
            <div className="p-3 rounded-3 bg-light">
                <div className="mb-4">
                    <p className="mb-2 text-muted" style={{ fontSize: '14px' }}>Resurse Utilizate</p>
                    <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                            <span style={{ fontSize: '14px' }}>CPU</span>
                            <span style={{ fontSize: '14px' }}>45.2%</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                            <span style={{ fontSize: '14px' }}>Memorie</span>
                            <span style={{ fontSize: '14px' }}>62.5%</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                            <div className="progress-bar bg-success" style={{ width: '62%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between mb-1">
                            <span style={{ fontSize: '14px' }}>Disk I/O</span>
                            <span style={{ fontSize: '14px' }}>28.3%</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                            <div className="progress-bar bg-warning" style={{ width: '28%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const SettingsWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out' }}>
            <h5 className="mb-4 fw-semibold">Configurare Sistem</h5>
            <div className="list-group">
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Monitorizare Automată</h6>
                            <small className="text-muted">Activează monitorizarea continuă</small>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="monitoringSwitch" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Mod Performanță</h6>
                            <small className="text-muted">Optimizează resursele sistemului</small>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="performanceSwitch" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Interval Actualizare</h6>
                            <small className="text-muted">Frecvența actualizării datelor</small>
                        </div>
                        <select className="form-select" style={{ width: 'auto' }}>
                            <option>5 sec</option>
                            <option>10 sec</option>
                            <option>30 sec</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    const ProfileWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out' }}>
            <h5 className="mb-4 fw-semibold">Profil Administrator</h5>
            <div className="text-center mb-4">
                <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center mb-3"
                     style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-person-workspace text-white fs-1"></i>
                </div>
                <h5 className="mb-1">Administrator Sistem</h5>
                <p className="text-muted mb-0">admin@system.local</p>
            </div>
            <div className="list-group">
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Nivel Acces</h6>
                            <small className="text-muted">Administrator Principal</small>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">Modifică</button>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Ultima Autentificare</h6>
                            <small className="text-muted">12:45:23 25/03/2024</small>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">Detalii</button>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Sesiuni Active</h6>
                            <small className="text-muted">2 dispozitive conectate</small>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">Vezi</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const DefaultWidget = () => (
        <div className="bg-white rounded-3 p-4 h-100" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out' }}>
            <div className="d-flex flex-column justify-content-center h-100">
                <div className="text-center">
                    <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-grid-3x3-gap text-white fs-1"></i>
                    </div>
                    <h4 className="mb-3 fw-semibold">Bine ați venit la CDI</h4>
                    <p className="text-muted mb-4">Interfața Centralizată de Monitorizare și Control</p>
                    <div className="row g-3 justify-content-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div className="col-6">
                            <div className="p-3 rounded-3 bg-light text-center">
                                <i className="bi bi-cpu fs-4 text-primary mb-2"></i>
                                <p className="mb-0 small">Monitorizare Sistem</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3 rounded-3 bg-light text-center">
                                <i className="bi bi-graph-up fs-4 text-primary mb-2"></i>
                                <p className="mb-0 small">Statistici în Timp Real</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const breakpointColumns = {
        default: 4,
        1400: 3,
        992: 2,
        576: 1
    };

    return (
        <div className="min-vh-100" style={{ backgroundColor: 'rgba(13, 145, 253, 0.03)' }}>
            <TopBar />
            <BottomBar />
            
            {/* Content */}
            <div style={{ 
                position: 'fixed',
                top: '72px',
                bottom: '95px',
                left: 0,
                right: 0,
                overflow: 'auto',
                padding: '24px'
            }}>
                <div className="container-fluid h-100">
                    {!Object.values(activeWidgets).some(value => value) ? (
                        <DefaultWidget />
                    ) : (
                        <Masonry
                            breakpointCols={breakpointColumns}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {activeWidgets.systemResources && (
                                <div><BankCardWidget /></div>
                            )}
                            {activeWidgets.performance && (
                                <div><AnalyticsChartWidget /></div>
                            )}
                            {activeWidgets.settings && (
                                <div><SettingsWidget /></div>
                            )}
                            {activeWidgets.profile && (
                                <div><ProfileWidget /></div>
                            )}
                        </Masonry>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;

