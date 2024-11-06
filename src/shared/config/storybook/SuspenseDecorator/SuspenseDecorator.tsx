import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/deprecated/Loader';

export const SuspenseDecorator = (StoryComponent: StoryFn) => (
    <Suspense fallback={<Loader />}>
        <StoryComponent />
    </Suspense>
);
