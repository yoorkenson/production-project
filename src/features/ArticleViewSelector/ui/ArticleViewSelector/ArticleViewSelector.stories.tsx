import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '@/entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
