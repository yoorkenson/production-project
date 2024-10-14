import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from './addCommentFormSelectors';

describe('addCommentForm.test', () => {
    test('getAddCommentFormText', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'text',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('text');
    });
    test('getAddCommentFormText empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('getAddCommentFormError', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
