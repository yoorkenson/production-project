import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

const meta = {
    title: '_CHOOSE_/ArticlesFilters',
    component: ArticlesFilters,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticlesFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'asc',
        type: ArticleType.ALL,
        search: '',
        onChangeSearch: (value: string) => {},
        onChangeOrder: (newOrder: SortOrder) => {},
        onChangeSort: (newSort: ArticleSortField) => {},
        onChangeType: (type: ArticleType) => {},
    },
};
