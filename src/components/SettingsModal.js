import React from 'react';

const SettingsModal = ({ show, modalRef, config }) => {
    if (!show) return null;

    return (
        <div ref={modalRef} className="position-absolute bg-white rounded-3 shadow-sm p-3"
             style={{
                 top: 'calc(100% + 8px)',
                 right: 0,
                 width: '280px',
                 zIndex: 1050
             }}>
            <h6 className="mb-3 fw-semibold">Setări</h6>
            <div className="d-flex flex-column gap-2">
                <button className="btn btn-light text-start w-100">
                    <i className="bi bi-bell me-2"></i>
                    Notificări
                </button>
                <button className="btn btn-light text-start w-100">
                    <i className="bi bi-shield-lock me-2"></i>
                    Securitate
                </button>
                <button className="btn btn-light text-start w-100">
                    <i className="bi bi-globe me-2"></i>
                    Limbă
                </button>
                <button className="btn btn-light text-start w-100">
                    <i className="bi bi-moon me-2"></i>
                    Mod întunecat
                </button>
            </div>
        </div>
    );
};

export default SettingsModal; 