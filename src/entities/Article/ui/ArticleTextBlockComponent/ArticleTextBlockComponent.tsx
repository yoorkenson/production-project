import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBLock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBLock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <TextRedesigned
                                title={block.title}
                                className={cls.title}
                            />
                        }
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <TextRedesigned
                                text={paragraph}
                                key={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        off={
                            <TextDeprecated
                                text={paragraph}
                                key={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
