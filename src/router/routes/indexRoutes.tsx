import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from './routes';

export const indexRoutes = [
    {
        index: true,
        element: (
            <Navigate
                to={routes.testRoute1}
                replace
            />
        ),
    },
    {
        path: '*',
        element: (
            <Navigate
                to='/'
                replace
            />
        ),
    },
];
