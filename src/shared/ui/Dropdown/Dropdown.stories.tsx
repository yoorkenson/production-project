import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <Button>button</Button>,
        items: [
            {
                content: 'content',
            },
            {
                content: 'content 2',
            },
            {
                content: 'content 3',
            },
        ],
    },
};
