import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        isOpen: true,
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:
            'asdsefhfgsf eshdfgaff sf d asdfg skdjghlkdfjhglkjsd hglkjshdfgflkhdglk shdfgjkhslkdfjgh slkdfkgjhsldkjffghl skdfjhgksdhfglkjsdhfgl ksjdhfglkajdhfgf alkdjfghaldkfjfgh alkjdfgh',
    },
};

export const Dark: Story = {
    args: {
        children:
            'asdsefhfgsf eshdfgaff sf d asdfg skdjghlkdfjhglkjsd hglkjshdfgflkhdglk shdfgjkhslkdfjgh slkdfkgjhsldkjffghl skdfjhgksdhfglkjsdhfgl ksjdhfglkajdhfgf alkdjfghaldkfjfgh alkjdfgh',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
