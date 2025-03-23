import defaultAppConfig from './default-app.json';
import walletAppConfig from './wallet-app.json';

let isAuthenticated = 1; // 0 - neautentificat, 1 - autentificat

export const isUserAuthenticated = () => isAuthenticated === 1;

export const setUserAuthenticated = (value) => {
    isAuthenticated = value ? 1 : 0;
};

export const getConfig = (type) => {
    const configType = type || 'default';
    
    switch (configType) {
        case 'wallet':
            return walletAppConfig;
        case 'default':
        default:
            return defaultAppConfig;
    }
};

export { defaultAppConfig, walletAppConfig }; 