import defaultAppConfig from './default-app.json';
import walletAppConfig from './wallet-app.json';

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