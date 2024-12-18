import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta = {
    title: 'entities/Comment/CommentCard',
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

const normalArgs = {
    comment: {
        id: '1',
        text: 'text',
        user: {
            id: '1',
            username: 'user',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
        },
    },
};

export const Normal: Story = {
    args: normalArgs,
    decorators: [FeaturesFlagsDecorator({ isAppRedesigned: false })],
};

export const NormalRedesigned: Story = {
    args: normalArgs,
    decorators: [FeaturesFlagsDecorator({ isAppRedesigned: true })],
};

export const Loading: Story = {
    args: {
        ...normalArgs,
        isLoading: true,
    },
};
