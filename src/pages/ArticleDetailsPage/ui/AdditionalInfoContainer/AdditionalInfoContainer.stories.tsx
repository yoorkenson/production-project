import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

const meta = {
    title: 'pages/ArticleDetailsPage/AdditionalInfoContainer',
    component: AdditionalInfoContainer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AdditionalInfoContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
