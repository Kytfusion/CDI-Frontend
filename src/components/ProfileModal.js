import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserAuthenticated } from '../config';

const ProfileModal = ({ show, modalRef, config }) => {
    const navigate = useNavigate();

    if (!show) return null;

    return (
        <div ref={modalRef} className="position-absolute bg-white rounded-3 shadow-sm p-3"
             style={{
                 top: 'calc(100% + 8px)',
                 right: 0,
                 width: '280px',
                 zIndex: 1050
             }}>
            {isUserAuthenticated() ? (
                <>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                             style={{ width: '48px', height: '48px' }}>
                            <i className="bi bi-person-fill fs-4" style={{ color: config.styles.primaryColor }}></i>
                        </div>
                        <div>
                            <h6 className="mb-0 fw-semibold">Ion Popescu</h6>
                            <small className="text-muted">ion.popescu@example.com</small>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <button onClick={() => navigate('/profile')} 
                                className="btn btn-light text-start w-100">
                            <i className="bi bi-person me-2"></i>
                            Profilul meu
                        </button>
                        <button onClick={() => {/* logică pentru delogare */}} 
                                className="btn btn-light text-start w-100">
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Delogare
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h6 className="mb-3 fw-semibold">Bine ați venit!</h6>
                    <div className="d-flex flex-column gap-2">
                        <button onClick={() => navigate('/login')} 
                                className="btn btn-primary w-100">
                            Logare
                        </button>
                        <button onClick={() => navigate('/register')} 
                                className="btn btn-light w-100">
                            Înregistrare
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileModal; 