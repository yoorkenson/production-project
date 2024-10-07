import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, commentsAdapter } from './articleDetailsCommentsSlice';

const entities = {
    1: {
        id: '1',
        text: 'some comment',
        user: {
            avatar: 'https://avatars.githubusercontent.com/u/116818633',
            id: '1',
            username: 'admin',
        },
        articleId: '1',
    },
    2: {
        id: '2',
        text: 'some comment',
        user: {
            avatar: 'https://avatars.githubusercontent.com/u/116818633',
            id: '1',
            username: 'admin',
        },
        articleId: '1',
    },
};
const ids = ['1', '2'];

const comment: Comment[] = [
    {
        id: '1',
        text: 'some comment',
        user: {
            avatar: 'https://avatars.githubusercontent.com/u/116818633',
            id: '1',
            username: 'admin',
        },
        articleId: '1',
    },
    {
        id: '2',
        text: 'some comment',
        user: {
            avatar: 'https://avatars.githubusercontent.com/u/116818633',
            id: '1',
            username: 'admin',
        },
        articleId: '1',
    },
];

describe('ArticleDetailsComments.test', () => {
    test('test updateProfile service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test updateProfile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
            error: undefined,
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.fulfilled(comment, '', ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            entities,
            ids,
        });
    });

    test('test updateProfile service rejected', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.rejected(new Error(), '', '', 'error'),
        )).toEqual({
            isLoading: false,
            error: 'error',
        });
    });
});
