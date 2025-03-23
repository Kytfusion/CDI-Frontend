import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setUserAuthenticated, useTranslation } from '../App';

const Auth = ({ isDarkMode }) => {
    const navigate = useNavigate();
    const { getTranslation } = useTranslation();
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode') || 'login';

    const handleAuth = () => {
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
                <h4 className="mb-4">{getTranslation(mode === 'login' ? 'login' : 'register')}</h4>
                <p className="mb-4">
                    {mode === 'login' 
                        ? getTranslation('pleaseLogin')
                        : 'Vă rugăm să vă înregistrați pentru a continua.'}
                </p>
                <button 
                    onClick={handleAuth}
                    className="btn btn-primary px-4 py-2"
                    style={{
                        backgroundColor: '#4070ff',
                        border: 'none'
                    }}
                >
                    {getTranslation(mode === 'login' ? 'login' : 'register')}
                </button>
            </div>
        </div>
    );
};

export default Auth; 