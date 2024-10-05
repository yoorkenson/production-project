import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error *fix-bug*
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
}));
