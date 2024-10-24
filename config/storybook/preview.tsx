import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '@/shared/const/theme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
        // (Story) => (
        //     TranslationDecorator(Story)
        // ),
        (Story) => (
            SuspenseDecorator(Story)
        ),
        (Story) => (
            RouterDecorator(Story)
        ),
    ],
};

export default preview;
