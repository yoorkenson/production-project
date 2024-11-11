import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta = {
    title: 'shared/deprecated/Popover',
    component: Popover,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <div>test</div>,
        children: <div>children</div>,
    },
};
