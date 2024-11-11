import type { Meta, StoryObj } from '@storybook/react';
import { ScrollToTopButton } from './ScrollToTopButton';

const meta = {
    title: '_CHOOSE_/ScrollToTopButton',
    component: ScrollToTopButton,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
