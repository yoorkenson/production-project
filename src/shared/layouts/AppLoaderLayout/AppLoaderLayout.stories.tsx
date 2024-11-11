import type { Meta, StoryObj } from '@storybook/react';
import { AppLoaderLayout } from './AppLoaderLayout';

const meta = {
    title: 'shared/layouts/AppLoaderLayout',
    component: AppLoaderLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AppLoaderLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
