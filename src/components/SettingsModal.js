import React from 'react';
import { useTranslation } from '../App';

const SettingsModal = ({ show, modalRef, config, isDarkMode, onToggleDarkMode }) => {
    const { getTranslation, currentLanguage, setCurrentLanguage } = useTranslation();

    if (!show) return null;

    const handleThemeToggle = (e) => {
        e.stopPropagation();
        onToggleDarkMode();
    };

    const handleLanguageChange = (e) => {
        e.stopPropagation();
        setCurrentLanguage(e.target.value);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleInputClick = (e) => {
        e.stopPropagation();
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
            <h6 className="mb-3 fw-semibold">{getTranslation('settings')}</h6>
            <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center justify-content-between p-2 rounded-2"
                     onClick={handleInputClick}
                     style={{
                         backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                         border: 'none',
                         transition: 'background-color 0.3s ease'
                     }}>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-moon me-2"></i>
                        <span>{getTranslation('darkMode')}</span>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" 
                               type="checkbox" 
                               role="switch" 
                               id="darkModeSwitch"
                               checked={isDarkMode} 
                               onChange={handleThemeToggle}
                               onClick={handleInputClick}
                               style={{
                                   backgroundColor: isDarkMode ? config.styles.primaryColor : '#e9ecef',
                                   borderColor: isDarkMode ? config.styles.primaryColor : '#dee2e6',
                                   cursor: 'pointer',
                                   transition: 'background-color 0.3s ease, border-color 0.3s ease'
                               }} />
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between p-2 rounded-2"
                     onClick={handleInputClick}
                     style={{
                         backgroundColor: isDarkMode ? '#3d3d3d' : '#f8f9fa',
                         border: 'none',
                         transition: 'background-color 0.3s ease'
                     }}>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-translate me-2"></i>
                        <span>{getTranslation('language')}</span>
                    </div>
                    <select 
                        className="form-select form-select-sm" 
                        value={currentLanguage}
                        onChange={handleLanguageChange}
                        onClick={handleInputClick}
                        style={{
                            width: 'auto',
                            backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                            color: isDarkMode ? '#ffffff' : '#000000',
                            border: 'none'
                        }}>
                        <option value="ro">Română</option>
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal; 