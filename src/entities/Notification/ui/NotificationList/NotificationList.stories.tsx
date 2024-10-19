import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
