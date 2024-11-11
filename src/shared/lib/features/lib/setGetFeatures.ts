import { FeatureFlags } from '@/shared/types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';

// ФИЧИ НЕ МЕНЯЮТСЯ ВО ВРЕМЯ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ
let featureFlags: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
