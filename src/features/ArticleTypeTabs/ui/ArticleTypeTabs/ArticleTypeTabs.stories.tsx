import type { Meta, StoryObj } from '@storybook/react';
import { ArticleType } from '@/entities/Article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onChangeType: () => {},
        value: ArticleType.ALL,
    },
};
