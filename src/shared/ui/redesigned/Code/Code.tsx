import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Copy from '@/shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import cls from './Code.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';
import CopyIconNew from '@/shared/assets/icons/copynew.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                    />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button
                        onClick={onCopy}
                        className={cls.copyBtn}
                        theme={ButtonTheme.CLEAR}
                    >
                        <Copy className={cls.copyIcon} />
                    </Button>
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
