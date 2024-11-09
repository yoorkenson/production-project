import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard';

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCardDeprecated, {
                [cls.loading]: true,
            })}
        >
            <LoaderDeprecated />
        </HStack>
    );
};

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation();
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCardDeprecated, {}, [cls.error])}
        >
            <TextDeprecated
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
            />
        </HStack>
    );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return <ProfileCardDeprecatedLoader />;
    }

    if (error) {
        return <ProfileCardDeprecatedError />;
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.ProfileCardDeprecated, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} alt="#" />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Ваш Возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
