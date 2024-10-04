import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 20,
            country: Country.Ukraine,
            lastname: 'фамилия',
            first: 'имя',
            city: 'город',
            currency: Currency.EUR,
            avatar,
        },
    },
    decorators: [

    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
    ],
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
    decorators: [
    ],
};
