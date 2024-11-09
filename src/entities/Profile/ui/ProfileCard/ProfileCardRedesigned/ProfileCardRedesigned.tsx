import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { ProfileCardProps } from '../ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ProfileCardRedesignSkeleton = () => {
    return (
        <Card padding="24" max>
            <VStack gap="32">
                <HStack max justify="center">
                    <Skeleton border="100%" width={128} height={128} />
                </HStack>
                <HStack gap="32" max>
                    <VStack gap="16" max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                    <VStack gap="16" max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation();
    return (
        <HStack justify="center" max>
            <Text
                align="center"
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
            />
        </HStack>
    );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
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

    if (isLoading) {
        return <ProfileCardRedesignSkeleton />;
    }

    if (error) {
        return <ProfileCardRedesignedError />;
    }

    return (
        <Card padding="24" max className={className}>
            <VStack gap="32">
                {data?.avatar && (
                    <HStack justify="center" max>
                        <Avatar size={128} src={data?.avatar} alt="#" />
                    </HStack>
                )}
                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            onChange={onChangeAge}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack gap="16" max>
                        <Input
                            value={data?.username}
                            label={t('Имя пользователя')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Cсылка на аватар')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
