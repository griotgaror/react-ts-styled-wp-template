import LazyLoadFallback from '@/components/loading/lazyLoadFallback';
import React from 'react';
import { routes } from './routes';

const TestPage1 = React.lazy(() => import('../../pages/testPage1/testPage1'));
const TestPage2 = React.lazy(() => import('../../pages/testPage2/testPage2'));

export const testRoutes = [
    {
        path: routes.testRoute1,
        element: <LazyLoadFallback component={<TestPage1 />} />,
    },
    {
        path: routes.testRoute2,
        element: <LazyLoadFallback component={<TestPage2 />} />,
    },
];
