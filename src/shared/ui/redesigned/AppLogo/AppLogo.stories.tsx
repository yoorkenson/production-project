import type { Meta, StoryObj } from '@storybook/react';
import { AppLogo } from './AppLogo';

const meta = {
    title: 'shared/ui/AppLogo',
    component: AppLogo,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
