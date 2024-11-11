import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.BIG,
        isLoading,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={articles[index].id}
                />,
            );
        }

        return (
            <div className={cls.row} key={key} style={style}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    const ArticleListDeprecated = (
        <WindowScroller
            onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById('PAGE_ID') as Element}
        >
            {({
                width,
                height,
                registerChild,
                scrollTop,
                onChildScroll,
                isScrolling,
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                    data-testid="ArticleList"
                >
                    {virtualized ? (
                        <List
                            height={height ?? 700}
                            rowCount={rowCount}
                            rowHeight={isBig ? 700 : 330}
                            rowRenderer={rowRender}
                            width={width ? width - 80 : 700}
                            autoHeight
                            onScroll={onChildScroll}
                            isScrolling={isScrolling}
                            scrollTop={scrollTop}
                        />
                    ) : (
                        articles.map((item) => (
                            <ArticleListItem
                                article={item}
                                key={item.id}
                                view={view}
                                target={target}
                                className={cls.card}
                            />
                        ))
                    )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );

    const ArticleListRedesigned = (
        <HStack
            wrap="wrap"
            gap="16"
            className={classNames(cls.ArticleListRedesigned, {}, [
                className,
                cls[view],
            ])}
            data-testid="ArticleList"
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    key={item.id}
                    view={view}
                    target={target}
                    className={cls.card}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </HStack>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={ArticleListRedesigned}
            off={ArticleListDeprecated}
        />
    );
});
