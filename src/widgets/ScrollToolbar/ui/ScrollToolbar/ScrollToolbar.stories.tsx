import type { Meta, StoryObj } from '@storybook/react';
import { ScrollToolbar } from './ScrollToolbar';

const meta = {
    title: '_CHOOSE_/ScrollToolbar',
    component: ScrollToolbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ScrollToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
