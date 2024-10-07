import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
    title: '_CHOOSE_/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: { id: '1', text: 'text', user: { id: '1', username: 'user', avatar: '#' } },
    },
};
