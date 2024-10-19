import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';
import { ArticleCodeBLock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

export interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBLock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
