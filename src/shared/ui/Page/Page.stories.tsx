import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta = {
    title: '_CHOOSE_/Page',
    component: Page,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: '',
    },
};
