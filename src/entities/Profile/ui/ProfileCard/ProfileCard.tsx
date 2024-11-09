import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardRedesigned } from './ProfileCardRedesigned/ProfileCardRedesigned';
import { ProfileCardDeprecated } from './ProfileCardDeprecated/ProfileCardDeprecated';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
