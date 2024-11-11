import type { Meta, StoryObj } from '@storybook/react';
import SettingsPage from './SettingsPage';

const meta = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
