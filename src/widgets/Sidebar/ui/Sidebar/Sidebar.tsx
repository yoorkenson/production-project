import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarRedesigned } from './SidebarRedisigned/SidebarRedisigned';
import { SidebarDeprecated } from './SidebarDeprecated/SidebarDeprecated';

export const Sidebar = memo(() => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<SidebarDeprecated />}
            on={<SidebarRedesigned />}
        />
    );
});
