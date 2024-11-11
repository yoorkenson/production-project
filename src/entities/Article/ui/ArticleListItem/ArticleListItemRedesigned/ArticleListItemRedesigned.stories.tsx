import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

const meta = {
    title: '_CHOOSE_/ArticleListItemRedesigned',
    component: ArticleListItemRedesigned,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleListItemRedesigned>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
