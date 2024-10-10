import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsRecommendationsReducer,
} from '../slices/articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types/index';
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
