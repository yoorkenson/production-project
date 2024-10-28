import type { Meta, StoryObj } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

const meta = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
    },
    decorators: [
        (Story) => (
            <div style={{ width: 'fit-content', padding: 100 }}><Story /></div>
        ),
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'name',
                    avatar: 'qweqwe',
                    roles: [UserRole.ADMIN],
                },
                _inited: true,
            },
        }),
    ],
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
