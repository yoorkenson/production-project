import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            readonly={readonly}
            className={classNames(cls.CurrencySelect, {}, [className])}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            direction="top right"
        />
    );
});
