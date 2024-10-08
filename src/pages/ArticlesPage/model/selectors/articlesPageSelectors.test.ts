import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    getArticlesPageView,
    getArticlesPageError,
    getArticlesPageIsLoading,

} from './articlesPageSelecrots';

describe('articlesPage.test', () => {
    test('should return view', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.BIG,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG);
    });
    test('should work with empty data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
    });
});
