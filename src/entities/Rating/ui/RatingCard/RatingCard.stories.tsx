import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
