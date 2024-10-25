import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
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
    args: { onSuccess: () => console.log('') },
    decorators: [
        StoreDecorator({
            loginForm: { username: 'admin', password: '123' },
        }),
    ],
};

export const Loading: Story = {
    args: { onSuccess: () => console.log('') },
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};

export const WithError: Story = {
    args: { onSuccess: () => console.log('') },
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123', error: 'ERROR' },
        }),
    ],
};
