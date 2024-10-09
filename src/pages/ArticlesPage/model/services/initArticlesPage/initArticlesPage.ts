import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited, getArticlesPageLimit } from '../../selectors/articlesPageSelecrots';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;
            dispatch(articlesPageActions.setOrder(orderFromUrl ?? ''));
            dispatch(articlesPageActions.setSort(sortFromUrl ?? ''));
            dispatch(articlesPageActions.setSearch(searchFromUrl ?? ''));
            dispatch(articlesPageActions.setType(typeFromUrl ?? ''));

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
