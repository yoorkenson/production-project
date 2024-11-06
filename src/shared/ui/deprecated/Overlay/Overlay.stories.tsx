import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';

const meta = {
    title: 'shared/Overlay',
    component: Overlay,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
