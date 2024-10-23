import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from '@/app/providers/StoreProvider';
import { addCommentForArticle } from '../../services/addCommentForArticle/addCommentForArticle';

const data = {
    id: '1',
    articleId: '1',
    userId: '1',
    text: 'test text',
};

const state: DeepPartial<StateSchema> = {
    articleDetails: { data: { id: '1' } },
    user: { authData: { id: '1' } },
};

describe('addCommentForArticle.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('test text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toStrictEqual(data);
    });

    test('failed adding of comment for article with no data', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('no data');
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('test text');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
