import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: '123123123',
                user: { id: '1', username: 'QWERTY' },
            },
            {
                id: '2',
                text: 'qweqwewqe',
                user: { id: '1', username: 'QWERTY' },
            },
        ],
    },
    decorators: [
    ],
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
    decorators: [
    ],
};
