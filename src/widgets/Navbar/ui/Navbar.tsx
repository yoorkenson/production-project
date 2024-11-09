import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { NavbarDeprecated } from './NavbarDeprecated/NavbarDeprecated';
import { NavbarRedesigned } from './NavbarRedesigned/NavbarRedesigned';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<NavbarDeprecated />}
            on={<NavbarRedesigned />}
        />
    );
});
