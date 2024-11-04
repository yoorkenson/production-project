import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
    isLoading: boolean;
}

export function useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback,
    isLoading,
}: UseInfiniteScrollProps) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback && !isLoading) {
            const options = {
                root: wrapperElement,
                rootMargin: '20px 20px 20px 45px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
                // observer.disconnect();
            }
        };
    }, [callback, isLoading, triggerRef, wrapperRef]);
}
