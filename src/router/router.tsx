import AppLayout from '@/appLayout';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { indexRoutes } from './routes/indexRoutes';
import { testRoutes } from './routes/testRoutes';

const routerConfig = [
    {
        path: '/',
        element: <AppLayout />,
        children: [...indexRoutes, ...testRoutes],
    },
];

const router = createBrowserRouter(routerConfig);

export default function Router() {
    return <RouterProvider router={router} />;
}
