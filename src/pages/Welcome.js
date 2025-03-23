import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserAuthenticated } from '../App';

const Welcome = ({ isDarkMode }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        setUserAuthenticated(true);
        navigate('/page-one');
    };

    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            <div style={{ 
                color: isDarkMode ? '#ffffff' : '#000000',
                opacity: isDarkMode ? 0.8 : 1,
                textAlign: 'center',
                maxWidth: '400px'
            }}>
                <h4 className="mb-4">Bine ați venit!</h4>
                <p className="mb-4">Vă rugăm să vă autentificați pentru a continua.</p>
                <button 
                    onClick={handleLogin}
                    className="btn btn-primary px-4 py-2"
                    style={{
                        backgroundColor: '#4070ff',
                        border: 'none'
                    }}
                >
                    Autentificare
                </button>
            </div>
        </div>
    );
};

export default Welcome; 