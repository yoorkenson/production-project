import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';

const meta = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
