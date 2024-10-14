import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types/index';
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
