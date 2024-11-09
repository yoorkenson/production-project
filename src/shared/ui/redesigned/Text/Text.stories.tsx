import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
        variant: 'primary',
    },
};

export const Accent: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
        variant: 'accent',
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
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title dis',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Text dis Text dis Text dis Text dis Text dis',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeS: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
        size: 's',
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
        size: 'm',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title dis',
        text: 'Text dis Text dis Text dis Text dis Text dis',
        size: 'l',
    },
};
