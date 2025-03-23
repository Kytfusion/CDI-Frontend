import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../App';

const Welcome = ({ isDarkMode }) => {
    const navigate = useNavigate();
    const { getTranslation } = useTranslation();

    const handleLogin = () => {
        navigate('/auth?mode=login');
    };

    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            <div style={{ 
                color: isDarkMode ? '#ffffff' : '#000000',
                opacity: isDarkMode ? 0.8 : 1,
                textAlign: 'center',
                maxWidth: '400px'
            }}>
                <h4 className="mb-4">{getTranslation('welcome')}</h4>
                <p className="mb-4">{getTranslation('pleaseLogin')}</p>
                <button 
                    onClick={handleLogin}
                    className="btn btn-primary px-4 py-2"
                    style={{
                        backgroundColor: '#4070ff',
                        border: 'none'
                    }}
                >
                    {getTranslation('login')}
                </button>
            </div>
        </div>
    );
};

export default Welcome; 