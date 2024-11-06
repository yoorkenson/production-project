import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Loader = ({ className }: LoaderProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('lds-ripple', {}, [className])}>
            <div />
            <div />
        </div>
    );
};
