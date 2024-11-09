import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        sort,
        order,
        search,
        type,
        onChangeOrder,
        onChangeType,
        onChangeSort,
        onChangeSearch,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            type={type}
            order={order}
            sort={sort}
            search={search}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            className={className}
        />
    );
});
