import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Page } from './Page';

const meta = {
    title: 'widgets/Page',
    component: Page,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <div>test</div>,
    },
    decorators: [StoreDecorator({})],
};
