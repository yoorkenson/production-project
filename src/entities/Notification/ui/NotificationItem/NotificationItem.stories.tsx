import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        item: {
            title: 'title',
            id: 'id',
            description: 'lesjfjnlskjdgndng;skfdg',
        },
    },
};
