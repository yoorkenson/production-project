import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBLock } from '../../model/types/article';

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
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <Text
                        text={paragraph}
                        key={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    },
);
