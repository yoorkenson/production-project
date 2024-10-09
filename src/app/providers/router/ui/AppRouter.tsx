import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

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
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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
