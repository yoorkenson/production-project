import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon as IconRedesigned } from '../Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, selectedStars = 0, onSelect, size = 30 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.StarRatingRedesigned,
        off: () => cls.StarRating,
    });

    return (
        <div className={classNames(mainClass, {}, [className])}>
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.normal]: currentStarsCount < starNumber,
                            [cls.selected]: isSelected,
                        },
                        [],
                    ),
                    Svg: StarIcon,
                    key: starNumber,
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                };
                return (
                    <ToggleFeatures
                        key={commonProps.key}
                        feature="isAppRedesigned"
                        on={
                            <IconRedesigned
                                clickable={!isSelected}
                                {...commonProps}
                            />
                        }
                        off={<IconDeprecated {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});
