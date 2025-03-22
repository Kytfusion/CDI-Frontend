import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const [activeWidgets, setActiveWidgets] = useState({
        bankCard: false,
        analytics: false,
        search: false,
        history: false,
        settings: false,
        profile: false
    });

    const MobileTopBar = () => {
        const location = useLocation();
        const navigate = useNavigate();

        const handleClick = (path) => {
            navigate(path);
            handleNavigation(path);
        };

        const getActiveWidgetNames = () => {
            const activeItems = [];
            if (activeWidgets.bankCard) activeItems.push('Card Bancar');
            if (activeWidgets.search) activeItems.push('Căutare');
            if (activeWidgets.analytics) activeItems.push('Statistici');
            if (activeWidgets.history) activeItems.push('Istoric');
            return activeItems;
        };

        const getDisplayText = () => {
            const activeItems = getActiveWidgetNames();
            if (activeItems.length === 0) {
                return 'CDI';
            }
            return activeItems.join(' • ');
        };

        return (
            <div className="d-md-none fixed-top bg-white" style={{ height: '56px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="d-flex align-items-center justify-content-between h-100 px-3">
                    <div className="text-start" style={{ 
                        maxWidth: 'calc(100% - 96px)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        <h6 className="mb-0 fw-semibold text-dark">{getDisplayText()}</h6>
                    </div>
                    <div className="d-flex align-items-center gap-1" style={{ width: '80px' }}>
                        <button onClick={() => handleClick('/settings')} className="btn p-0 border-0">
                            <div className={`d-flex align-items-center justify-content-center rounded-2 ${activeWidgets.settings ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                 style={{ width: '32px', height: '32px' }}>
                                <i className="bi bi-gear fs-5"></i>
                            </div>
                        </button>
                        <button onClick={() => handleClick('/profile')} className="btn p-0 border-0">
                            <div className={`d-flex align-items-center justify-content-center rounded-circle text-white`}
                                 style={{ width: '32px', height: '32px', backgroundColor: activeWidgets.profile ? '#0d6efd' : '#ff6b4a' }}>
                                <i className="bi bi-person-fill fs-5"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const DesktopPageTitle = () => {
        const location = useLocation();
        
        const getActiveWidgetNames = () => {
            const activeItems = [];
            if (activeWidgets.bankCard) activeItems.push('Card Bancar');
            if (activeWidgets.search) activeItems.push('Căutare');
            if (activeWidgets.analytics) activeItems.push('Statistici');
            if (activeWidgets.history) activeItems.push('Istoric');
            if (activeWidgets.settings) activeItems.push('Setări');
            if (activeWidgets.profile) activeItems.push('Profil');
            return activeItems;
        };

        const getDisplayText = () => {
            const activeItems = getActiveWidgetNames();
            if (activeItems.length === 0) {
                return 'CDI';
            }
            return activeItems.join(' • ');
        };

        return (
            <div className="d-none d-md-block position-fixed start-50 translate-middle-x" 
                 style={{ 
                     top: '15px',
                     zIndex: 1000,
                     marginBottom: '15px'
                 }}>
                <div className="bg-white px-4 py-2 rounded-pill" 
                     style={{ 
                         minWidth: '160px',
                         maxWidth: '600px',
                         boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                         whiteSpace: 'nowrap',
                         overflow: 'hidden',
                         textOverflow: 'ellipsis',
                         height: '40px',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center'
                     }}>
                    <h6 className="mb-0 fw-semibold text-center">{getDisplayText()}</h6>
                </div>
            </div>
        );
    };

    const DesktopBottomBar = () => {
        const location = useLocation();
        const navigate = useNavigate();

        const handleClick = (path) => {
            navigate(path);
            handleNavigation(path);
        };

        return (
            <div className="d-none d-md-block" style={{ position: 'fixed', bottom: '25px', width: '100%', zIndex: 1000 }}>
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
                                <button onClick={() => handleClick('/')} 
                                        className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 border-0 ${activeWidgets.bankCard ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-grid-1x2-fill fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>Card Bancar</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleClick('/search')}
                                        className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 border-0 ${activeWidgets.search ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-search fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>Căutare</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleClick('/analytics')}
                                        className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 border-0 ${activeWidgets.analytics ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-bar-chart-line fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>Statistici</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleClick('/history')}
                                        className={`nav-link d-flex align-items-center px-2 py-2 rounded-2 border-0 ${activeWidgets.history ? 'bg-primary text-white' : 'text-dark opacity-75'}`}>
                                    <i className="bi bi-clock-history fs-5"></i>
                                    <span className="fw-medium ms-2" style={{ fontSize: '14px' }}>Istoric</span>
                                </button>
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
                            <button onClick={() => handleClick('/settings')} className="btn p-0 border-0">
                                <div className={`d-flex align-items-center justify-content-center rounded-2 ${activeWidgets.settings ? 'bg-primary text-white' : 'text-dark opacity-75'}`}
                                     style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-gear fs-5"></i>
                                </div>
                            </button>
                            <button onClick={() => handleClick('/profile')} className="btn p-0 border-0">
                                <div className={`d-flex align-items-center justify-content-center rounded-circle text-white`}
                                     style={{ width: '32px', height: '32px', backgroundColor: activeWidgets.profile ? '#0d6efd' : '#ff6b4a' }}>
                                    <i className="bi bi-person-fill fs-5"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const BottomBar = () => {
        const location = useLocation();
        const navigate = useNavigate();

        const handleClick = (path) => {
            navigate(path);
            handleNavigation(path);
        };

        return (
            <nav className="navbar fixed-bottom d-md-none bg-white" style={{ height: '85px', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)', borderTop: '1px solid rgba(0,0,0,0.08)', paddingBottom: '10px' }}>
                <ul className="nav w-100 h-100 d-flex justify-content-between align-items-center px-2">
                    <li className="nav-item text-center" style={{ minWidth: '80px', maxWidth: '80px' }}>
                        <button onClick={() => handleClick('/')} 
                                className={`nav-link p-0 border-0 bg-transparent ${activeWidgets.bankCard ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="d-flex align-items-center justify-content-center mx-auto rounded-2" 
                                 style={{ backgroundColor: activeWidgets.bankCard ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-grid-1x2-fill fs-5"></i>
                            </div>
                            <small className="d-block mt-0" style={{ fontSize: '11px' }}>Card Bancar</small>
                        </button>
                    </li>
                    <li className="nav-item text-center" style={{ minWidth: '80px', maxWidth: '80px' }}>
                        <button onClick={() => handleClick('/search')}
                                className={`nav-link p-0 border-0 bg-transparent ${activeWidgets.search ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="d-flex align-items-center justify-content-center mx-auto rounded-2" 
                                 style={{ backgroundColor: activeWidgets.search ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-search fs-5"></i>
                            </div>
                            <small className="d-block mt-0" style={{ fontSize: '11px' }}>Căutare</small>
                        </button>
                    </li>
                    <li className="nav-item text-center" style={{ minWidth: '80px', maxWidth: '80px' }}>
                        <button onClick={() => handleClick('/analytics')}
                                className={`nav-link p-0 border-0 bg-transparent ${activeWidgets.analytics ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="d-flex align-items-center justify-content-center mx-auto rounded-2" 
                                 style={{ backgroundColor: activeWidgets.analytics ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-bar-chart-line fs-5"></i>
                            </div>
                            <small className="d-block mt-0" style={{ fontSize: '11px' }}>Statistici</small>
                        </button>
                    </li>
                    <li className="nav-item text-center" style={{ minWidth: '80px', maxWidth: '80px' }}>
                        <button onClick={() => handleClick('/history')}
                                className={`nav-link p-0 border-0 bg-transparent ${activeWidgets.history ? 'text-primary' : 'text-dark opacity-75'}`}>
                            <div className="d-flex align-items-center justify-content-center mx-auto rounded-2" 
                                 style={{ backgroundColor: activeWidgets.history ? 'rgba(13,110,253,0.08)' : 'transparent', width: '32px', height: '32px' }}>
                                <i className="bi bi-clock-history fs-5"></i>
                            </div>
                            <small className="d-block mt-0" style={{ fontSize: '11px' }}>Istoric</small>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    };

    const HomePage = () => null;

    const SearchPage = () => null;

    const AnalyticsPage = () => null;

    const HistoryPage = () => null;

    const NotificationsPage = () => null;

    const SettingsPage = () => null;

    const ProfilePage = () => null;

    const BankCardWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h5 className="mb-4 fw-semibold">Card Bancar</h5>
            <div className="card bg-primary text-white rounded-4" style={{ maxWidth: '360px' }}>
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <p className="mb-0 opacity-75" style={{ fontSize: '14px' }}>Sold Curent</p>
                            <h3 className="mb-0 fw-semibold">12,350.75 MDL</h3>
                        </div>
                        <i className="bi bi-credit-card fs-1"></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                        <div>
                            <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Număr Card</p>
                            <h6 className="mb-0 fw-semibold">**** **** **** 4589</h6>
                        </div>
                        <div className="text-end">
                            <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Expiră</p>
                            <h6 className="mb-0 fw-semibold">12/25</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const AnalyticsWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h5 className="mb-4 fw-semibold">Statistica Cheltuielilor</h5>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="mb-1 text-muted" style={{ fontSize: '14px' }}>Cheltuieli Lunare</p>
                        <h4 className="mb-0 fw-semibold">8,245.50 MDL</h4>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="mb-1 text-muted" style={{ fontSize: '14px' }}>Economii</p>
                        <h4 className="mb-0 fw-semibold">4,105.25 MDL</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="mb-2 text-muted" style={{ fontSize: '14px' }}>Categorii Principale</p>
                        <div className="progress mb-2" style={{ height: '8px' }}>
                            <div className="progress-bar bg-primary" style={{ width: '40%' }}></div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span style={{ fontSize: '14px' }}>Cumpărături</span>
                            <span style={{ fontSize: '14px' }}>40%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const SearchWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h5 className="mb-4 fw-semibold">Căutare Rapidă</h5>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Caută tranzacții..." />
                <button className="btn btn-primary">
                    <i className="bi bi-search"></i>
                </button>
            </div>
            <div className="d-flex gap-2 flex-wrap">
                <button className="btn btn-light btn-sm">Ultima săptămână</button>
                <button className="btn btn-light btn-sm">Ultima lună</button>
                <button className="btn btn-light btn-sm">Suma {'>'}1000 MDL</button>
                <button className="btn btn-light btn-sm">Cumpărături</button>
            </div>
        </div>
    );

    const HistoryWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h5 className="mb-4 fw-semibold">Istoric Tranzacții</h5>
            <div className="list-group">
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Kaufland</h6>
                            <small className="text-muted">20 martie 2024</small>
                        </div>
                        <span className="text-danger fw-semibold">-245.50 MDL</span>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Transfer primit</h6>
                            <small className="text-muted">19 martie 2024</small>
                        </div>
                        <span className="text-success fw-semibold">+1,500.00 MDL</span>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Farmacia Familiei</h6>
                            <small className="text-muted">18 martie 2024</small>
                        </div>
                        <span className="text-danger fw-semibold">-156.75 MDL</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const SettingsWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h5 className="mb-4 fw-semibold">Setări</h5>
            <div className="list-group">
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Notificări</h6>
                            <small className="text-muted">Gestionează notificările aplicației</small>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="notificationsSwitch" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Mod Întunecat</h6>
                            <small className="text-muted">Schimbă tema aplicației</small>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" />
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Limbă</h6>
                            <small className="text-muted">Alege limba aplicației</small>
                        </div>
                        <select className="form-select" style={{ width: 'auto' }}>
                            <option>Română</option>
                            <option>English</option>
                            <option>Русский</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    const ProfileWidget = () => (
        <div className="bg-white rounded-3 p-4" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h5 className="mb-4 fw-semibold">Profil</h5>
            <div className="text-center mb-4">
                <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center mb-3"
                     style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-person-fill text-white fs-1"></i>
                </div>
                <h5 className="mb-1">Ion Popescu</h5>
                <p className="text-muted mb-0">ion.popescu@example.com</p>
            </div>
            <div className="list-group">
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Număr Telefon</h6>
                            <small className="text-muted">+373 69 123 456</small>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">Editează</button>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Adresă</h6>
                            <small className="text-muted">Str. Ștefan cel Mare 123, Chișinău</small>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">Editează</button>
                    </div>
                </div>
                <div className="list-group-item border-0 bg-light rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Securitate</h6>
                            <small className="text-muted">Schimbă parola</small>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">Modifică</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const DefaultWidget = () => (
        <div className="bg-white rounded-3 p-4 h-100" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div className="d-flex flex-column justify-content-center h-100">
                <div className="text-center">
                    <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center mb-4"
                         style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-bank2 text-white fs-1"></i>
                    </div>
                    <h4 className="mb-3 fw-semibold">Bine ați venit la CDI Bank</h4>
                    <p className="text-muted mb-4">Selectați o opțiune din meniu pentru a începe</p>
                    <div className="row g-3 justify-content-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div className="col-6">
                            <div className="p-3 rounded-3 bg-light text-center">
                                <i className="bi bi-credit-card fs-4 text-primary mb-2"></i>
                                <p className="mb-0 small">Gestionați cardul bancar</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3 rounded-3 bg-light text-center">
                                <i className="bi bi-graph-up fs-4 text-primary mb-2"></i>
                                <p className="mb-0 small">Vizualizați statistici</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3 rounded-3 bg-light text-center">
                                <i className="bi bi-search fs-4 text-primary mb-2"></i>
                                <p className="mb-0 small">Căutați tranzacții</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3 rounded-3 bg-light text-center">
                                <i className="bi bi-clock-history fs-4 text-primary mb-2"></i>
                                <p className="mb-0 small">Accesați istoricul</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const handleNavigation = (path) => {
        switch(path) {
            case '/':
                setActiveWidgets(prev => ({
                    ...prev,
                    bankCard: !prev.bankCard
                }));
                break;
            case '/analytics':
                setActiveWidgets(prev => ({
                    ...prev,
                    analytics: !prev.analytics
                }));
                break;
            case '/search':
                setActiveWidgets(prev => ({
                    ...prev,
                    search: !prev.search
                }));
                break;
            case '/history':
                setActiveWidgets(prev => ({
                    ...prev,
                    history: !prev.history
                }));
                break;
            case '/settings':
                setActiveWidgets(prev => ({
                    ...prev,
                    settings: !prev.settings
                }));
                break;
            case '/profile':
                setActiveWidgets(prev => ({
                    ...prev,
                    profile: !prev.profile
                }));
                break;
            default:
                break;
        }
    };

    return (
        <Router>
            <div className="min-vh-100" style={{ backgroundColor: 'rgba(13, 145, 253, 0.03)' }}>
                <MobileTopBar />
                <DesktopPageTitle />
                <DesktopBottomBar />
                <BottomBar />
                
                {/* Desktop Content */}
                <div className="d-none d-md-block" style={{ 
                    position: 'fixed',
                    top: '70px',
                    bottom: '95px',
                    left: 0,
                    right: 0,
                    overflow: 'auto'
                }}>
                    <div className="container-fluid h-100 py-2">
                        <div className="px-4 h-100">
                            <div className="d-flex flex-wrap h-100" style={{ gap: '8px' }}>
                                {!Object.values(activeWidgets).some(value => value) ? (
                                    <div className="h-100" style={{ flex: '1 1 360px', minWidth: '360px', maxWidth: 'calc(100% - 6px)' }}>
                                        <DefaultWidget />
                                    </div>
                                ) : (
                                    <>
                                        {activeWidgets.bankCard && (
                                            <div style={{ flex: '1 1 360px', minWidth: '360px', maxWidth: 'calc(33.333% - 6px)' }}>
                                                <BankCardWidget />
                                            </div>
                                        )}
                                        {activeWidgets.analytics && (
                                            <div style={{ flex: '1 1 360px', minWidth: '360px', maxWidth: 'calc(33.333% - 6px)' }}>
                                                <AnalyticsWidget />
                                            </div>
                                        )}
                                        {activeWidgets.search && (
                                            <div style={{ flex: '1 1 360px', minWidth: '360px', maxWidth: 'calc(33.333% - 6px)' }}>
                                                <SearchWidget />
                                            </div>
                                        )}
                                        {activeWidgets.history && (
                                            <div style={{ flex: '1 1 360px', minWidth: '360px', maxWidth: 'calc(33.333% - 6px)' }}>
                                                <HistoryWidget />
                                            </div>
                                        )}
                                        {activeWidgets.settings && (
                                            <div style={{ flex: '1 1 360px', minWidth: '360px', maxWidth: 'calc(33.333% - 6px)' }}>
                                                <SettingsWidget />
                                            </div>
                                        )}
                                        {activeWidgets.profile && (
                                            <div style={{ flex: '1 1 360px', minWidth: '360px', maxWidth: 'calc(33.333% - 6px)' }}>
                                                <ProfileWidget />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Content */}
                <div className="d-md-none" style={{ 
                    position: 'fixed',
                    top: '70px',
                    bottom: '95px',
                    left: 0,
                    right: 0,
                    overflow: 'auto'
                }}>
                    <div className="container-fluid h-100 py-2 px-2">
                        <div className="d-flex flex-column h-100" style={{ gap: '8px' }}>
                            {!Object.values(activeWidgets).some(value => value) ? (
                                <div className="h-100">
                                    <DefaultWidget />
                                </div>
                            ) : (
                                <>
                                    {activeWidgets.bankCard && <BankCardWidget />}
                                    {activeWidgets.analytics && <AnalyticsWidget />}
                                    {activeWidgets.search && <SearchWidget />}
                                    {activeWidgets.history && <HistoryWidget />}
                                    {activeWidgets.settings && <SettingsWidget />}
                                    {activeWidgets.profile && <ProfileWidget />}
                                </>
                            )}
                        </div>
                    </div>
                </div>

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
        </Router>
    );
}

export default App;
