import defaultAppConfig from './default-app.json';
import walletAppConfig from './wallet-app.json';

export const getConfig = (type = 'default') => {
    switch (type) {
        case 'default':
            return defaultAppConfig;
        case 'wallet':
        default:
            return walletAppConfig;
    }
};

export { defaultAppConfig, walletAppConfig }; 