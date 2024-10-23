import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { AppRouteProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
                {/* {Object.values(routeConfig).map(({ element, path }) => ( */}
                {/*    <Route */}
                {/*        key={path} */}
                {/*        path={path} */}
                {/*        element={( */}
                {/*            <div className="page-wrapper"> */}
                {/*                {element} */}
                {/*            </div> */}
                {/*        )} */}
                {/*    /> */}
                {/* ))} */}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
