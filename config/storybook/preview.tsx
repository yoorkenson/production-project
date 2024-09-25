import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { Story } from '@storybook/blocks';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

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
            RouterDecorator(Story)
        ),
    ],
};

export default preview;
