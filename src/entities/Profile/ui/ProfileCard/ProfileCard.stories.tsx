import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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

const args = {
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
};

export const Primary: Story = {
    args,
    decorators: [],
};

export const PrimaryRedesigned: Story = {
    args,
    decorators: [
        FeaturesFlagsDecorator({ isAppRedesigned: true }),
        NewDesignDecorator,
    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [],
};

export const LoadingRedesigned: Story = {
    args: {
        isLoading: true,
    },
    decorators: [FeaturesFlagsDecorator({ isAppRedesigned: true })],
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
    decorators: [],
};

export const WithErrorRedesigned: Story = {
    args: {
        error: 'error',
    },
    decorators: [FeaturesFlagsDecorator({ isAppRedesigned: true })],
};
