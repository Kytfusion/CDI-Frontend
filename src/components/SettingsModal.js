import React from 'react';

const SettingsModal = ({ show, modalRef, config, isDarkMode, onToggleDarkMode }) => {
    if (!show) return null;

    const handleThemeToggle = (e) => {
        e.stopPropagation(); // Previne propagarea evenimentului
        onToggleDarkMode();
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Previne închiderea modalului când se face click în interior
    };

    return (
        <div ref={modalRef} 
             className="position-absolute rounded-3 shadow-sm p-3"
             onClick={handleModalClick}
             style={{
                 top: 'calc(100% + 8px)',
                 right: 0,
                 width: '280px',
                 zIndex: 1050,
                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                 color: isDarkMode ? '#ffffff' : '#000000',
                 transition: 'background-color 0.3s ease, color 0.3s ease'
             }}>
            <h6 className="mb-3 fw-semibold">Setări</h6>
            <div className="d-flex flex-column gap-2">
                <button className="btn text-start w-100"
                        style={{
                            backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                            color: isDarkMode ? '#ffffff' : '#000000',
                            border: 'none',
                            transition: 'background-color 0.3s ease, color 0.3s ease'
                        }}>
                    <i className="bi bi-bell me-2"></i>
                    Notificări
                </button>
                <button className="btn text-start w-100"
                        style={{
                            backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                            color: isDarkMode ? '#ffffff' : '#000000',
                            border: 'none',
                            transition: 'background-color 0.3s ease, color 0.3s ease'
                        }}>
                    <i className="bi bi-shield-lock me-2"></i>
                    Securitate
                </button>
                <button className="btn text-start w-100"
                        style={{
                            backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                            color: isDarkMode ? '#ffffff' : '#000000',
                            border: 'none',
                            transition: 'background-color 0.3s ease, color 0.3s ease'
                        }}>
                    <i className="bi bi-globe me-2"></i>
                    Limbă
                </button>
                <div className="d-flex align-items-center justify-content-between p-2 rounded-2"
                     style={{
                         backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                         border: 'none',
                         transition: 'background-color 0.3s ease'
                     }}>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-moon me-2"></i>
                        <span>Mod întunecat</span>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" 
                               type="checkbox" 
                               role="switch" 
                               id="darkModeSwitch"
                               checked={isDarkMode} 
                               onChange={handleThemeToggle}
                               style={{
                                   backgroundColor: isDarkMode ? config.styles.primaryColor : '#6c757d',
                                   borderColor: isDarkMode ? config.styles.primaryColor : '#6c757d',
                                   cursor: 'pointer',
                                   transition: 'background-color 0.3s ease, border-color 0.3s ease'
                               }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal; 