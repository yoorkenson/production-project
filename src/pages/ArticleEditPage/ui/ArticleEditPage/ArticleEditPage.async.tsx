import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error *fix-bug*
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
