import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures,
                },
            }),
        );

        // тошо локальный сервер и фичафлаги в рамках сессии не обновляются, поэтому делаем принудительно релоад
        window.location.reload();
    } catch (e) {
        console.log(e);
        rejectWithValue('Error');
    }
});
