import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
