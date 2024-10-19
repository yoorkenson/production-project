import type { Meta, StoryObj } from '@storybook/react';
import { notificationButton } from './NotificationButton';

const meta = {
    title: '_CHOOSE_/NotificationButton',
    component: notificationButton,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof notificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
