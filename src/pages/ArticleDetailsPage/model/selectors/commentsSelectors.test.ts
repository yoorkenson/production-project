import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/commentsSelectors';

describe('commentsSelectors.test', () => {
    test('getArticleCommentsIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('getArticleCommentsIsLoading empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
    });

    test('getArticleCommentsError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'error',
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });
    test('getArticleCommentsError empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
