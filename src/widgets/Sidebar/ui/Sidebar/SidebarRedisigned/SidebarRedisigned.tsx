import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSidebarItems } from '../../../model/selectors/getSidebarItems';
import cls from '../Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';

interface SidebarProps {
    className?: string;
}

export const SidebarRedesigned = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    // const itemsList = useMemo(() => SidebarItemsList.map((item, key) => (
    //     <SidebarItem
    //         item={item}
    //         collapsed={collapsed}
    //         key={item.path}
    //     />
    // )), [collapsed]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo className={cls.appLogo} />
        </aside>
    );
});
