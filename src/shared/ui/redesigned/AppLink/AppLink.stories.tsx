import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        variant: 'primary',
    },
};

export const Red: Story = {
    args: {
        children: 'Text',
        variant: 'red',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        variant: 'primary',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
    args: {
        children: 'Text',
        variant: 'primary',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
