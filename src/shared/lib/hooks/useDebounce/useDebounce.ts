import { MutableRefObject, useCallback, useRef } from 'react';

/**
 *  Хук отмены предыдушего вызова функции, пока не пройдет delay
 *  @param callback
 *  @param delay - задержка в мс
 */

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}
