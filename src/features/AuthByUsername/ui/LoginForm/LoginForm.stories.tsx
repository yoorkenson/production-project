import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: 'admin', password: '123' },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123', error: 'ERROR' },
        }),
    ],
};