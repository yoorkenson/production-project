import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortField } from '../../model/consts/consts';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onChangeOrder: () => {},
        order: 'asc',
        sort: ArticleSortField.TITLE,
        onChangeSort: () => {},
    },
};
