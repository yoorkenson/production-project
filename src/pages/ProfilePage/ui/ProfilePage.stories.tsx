import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 20,
                    country: Country.Ukraine,
                    lastname: 'фамилия',
                    first: 'имя',
                    city: 'город',
                    currency: Currency.EUR,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 20,
                    country: Country.Ukraine,
                    lastname: 'фамилия',
                    first: 'имя',
                    city: 'город',
                    currency: Currency.EUR,
                },
            },
        }),
    ],
};
