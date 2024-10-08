import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error *fix-bug*
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
