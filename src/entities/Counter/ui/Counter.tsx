import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    // const counterValue = useSelector(getCounterValue);
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const {
        add,
        increment,
        decrement,
    } = useCounterActions();

    const handleInc = () => {
        // dispatch(counterActions.increment());
        increment();
    };

    const handleDec = () => {
        // dispatch(counterActions.decrement());
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handleDec}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
            <Button
                onClick={handleAddFive}
                data-testid="decrement-btn"
            >
                {t('addFive')}
            </Button>
        </div>
    );
};
