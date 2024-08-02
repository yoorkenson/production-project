import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('lds-ripple', {}, [className])}>
            <div />
            <div />
        </div>
    );
};
