import type { Meta, StoryObj } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';

const meta = {
    title: '_CHOOSE_/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
