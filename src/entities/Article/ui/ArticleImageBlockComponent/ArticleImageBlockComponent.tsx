import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { ArticleImageBLock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBLock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} className={cls.title} alt={block.id} />
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <TextRedesigned text={block.title} align="center" />
                        }
                        off={
                            <TextDeprecated
                                text={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);
