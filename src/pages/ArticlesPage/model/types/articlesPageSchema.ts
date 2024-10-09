import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleType, ArticleView, ArticleSortField,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: string;

    // pagination
    page: number;
    hasMore: boolean;
    limit: number;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited?: boolean;
}
