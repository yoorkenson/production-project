import type { Meta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: 'name' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'qweqwe',
};

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                    { ...article, id: '4' },
                ],
            },
        ],
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [StoreDecorator({})],
};
