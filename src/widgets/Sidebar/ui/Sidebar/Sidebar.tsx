import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {/* {itemsList} */}
                {SidebarItemsList.map((item, key) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
