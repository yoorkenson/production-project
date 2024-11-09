import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, onChange, value, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const listboxProps = {
        readonly,
        onChange: onChangeHandler,
        value,
        items: options,
        defaultValue: t('Укажите страну'),
        label: t('Укажите страну'),
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listboxProps} />}
            off={<ListBoxDeprecated {...listboxProps} />}
        />
    );
});
