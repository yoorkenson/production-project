import type { Meta, StoryObj } from '@storybook/react';
import { ViewSelectorContainer } from './ViewSelectorContainer';

const meta = {
    title: '_CHOOSE_/ViewSelectorContainer',
    component: ViewSelectorContainer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ViewSelectorContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
