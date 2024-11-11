import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

const meta = {
    title: '_CHOOSE_/ArticleListItemDeprecated',
    component: ArticleListItemDeprecated,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleListItemDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
