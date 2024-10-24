// eslint-disable-next-line right-path-fsd/layer-imports
import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line right-path-fsd/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>

);
