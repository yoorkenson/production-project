import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const items = [
    {
        value: '1',
        content: 'qwe',
    },
    {
        value: '2',
        content: 'asd',
        disabled: true,
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

export const NormalTop: Story = {
    args: {
        onChange: () => {},
        items,
        defaultValue: 'выберите',
        direction: 'top',
    },
};
