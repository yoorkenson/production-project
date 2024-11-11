import type { Meta, StoryObj } from '@storybook/react';
import { DetailsContainer } from './DetailsContainer';

const meta = {
    title: '_CHOOSE_/DetailsContainer',
    component: DetailsContainer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof DetailsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
