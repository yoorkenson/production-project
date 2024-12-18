import type { Meta, StoryObj } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

const meta = {
    title: 'widgets/ArticleAdditionalInfo/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleAdditionalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onEdit: () => {},
        views: 101,
        createdAt: 'today',
        author: {
            id: '1',
            username: 'name',
        },
    },
};
