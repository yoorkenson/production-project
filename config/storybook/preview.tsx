import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { withThemeByClassName } from '@storybook/addon-themes';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';
import { FeaturesFlagsDecorator } from '../../src/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const preview: Preview = {
    parameters: {
        actions: {
            argTypeRegex: '^on[A-Z].*',
        },
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeByClassName({
            themes: {
                light: `app ${Theme.LIGHT}`,
                dark: `app ${Theme.DARK}`,
                orange: `app ${Theme.ORANGE}`,
            },
            defaultTheme: 'light',
        }),
        // (Story) => (
        //     ThemeDecorator(Theme.LIGHT)(Story)
        // ),
        // (Story) => (
        //     TranslationDecorator(Story)
        // ),
        (Story) => SuspenseDecorator(Story),
        (Story) => RouterDecorator(Story),
        FeaturesFlagsDecorator({}),
    ],
};

export default preview;
