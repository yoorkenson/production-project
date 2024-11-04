import { buildSelector } from '@/shared/store';

// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterSchema) => counter.value,
// );

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
