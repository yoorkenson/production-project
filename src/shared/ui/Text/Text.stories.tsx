import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: { },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
    },
};

export const Error: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title dis',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text dis Text dis Text dis Text dis Text dis',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title dis',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Text dis Text dis Text dis Text dis Text dis',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
