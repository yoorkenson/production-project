import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error *fix-bug*
    setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));
