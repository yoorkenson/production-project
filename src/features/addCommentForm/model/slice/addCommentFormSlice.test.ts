import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from '../slice/addCommentFormSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: 'text' };
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('123123'),
        )).toEqual({ text: '123123' });
    });
});
