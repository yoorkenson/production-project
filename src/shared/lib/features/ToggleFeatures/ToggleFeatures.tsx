import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    off: ReactElement;
    on: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
