import type { Meta, StoryObj } from '@storybook/react';
import { FiltersContainer } from './FiltersContainer';

const meta = {
    title: '_CHOOSE_/FiltersContainer',
    component: FiltersContainer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof FiltersContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
