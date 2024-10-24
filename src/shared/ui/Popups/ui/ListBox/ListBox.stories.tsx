import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';

const items = [
    {
        value: '1',
        content: 'qwe',
    },
    {
        value: '2',
        content: 'asd',
    },
    {
        value: '3',
        content: 'zxc',
    },
];

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}><Story /></div>
        ),
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onChange: () => {},
        items,
        defaultValue: 'выберите',
    },
};

export const topLeft: Story = {
    args: {
        onChange: () => {},
        items,
        defaultValue: 'выберите',
        direction: 'top left',
    },
};

export const topRight: Story = {
    args: {
        onChange: () => {},
        items,
        defaultValue: 'выберите',
        direction: 'top right',
    },
};

export const bottomLeft: Story = {
    args: {
        onChange: () => {},
        items,
        defaultValue: 'выберите',
        direction: 'bottom left',
    },
};

export const bottomRight: Story = {
    args: {
        onChange: () => {},
        items,
        defaultValue: 'выберите',
        direction: 'bottom right',
    },
};
