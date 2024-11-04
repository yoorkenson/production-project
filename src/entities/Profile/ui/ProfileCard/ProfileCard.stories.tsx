import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
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
            // avatar,
            avatar: 'https://gotoparty.ru/public/img/upload/page/1231/2091608443221afd2c9db30f255c563a_200x200.jpg',
        },
    },
    decorators: [],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [],
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
    decorators: [],
};
