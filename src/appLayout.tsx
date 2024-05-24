import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Style from './appLayout.style';

import LoadingFallback from './components/loading/loadingFallback';
import { useAppDataContext } from './context/appDataContext';
import Header from './layout/header/header';

export default function AppLayout() {
    const { appDataStates } = useAppDataContext();
    const { isGlobalLoading } = appDataStates;

    return (
        <LoadingFallback isLoading={isGlobalLoading}>
            <Style._AppLayout animate='visible'>
                <Header />
                <Style._MainContent>
                    <Outlet />
                </Style._MainContent>
            </Style._AppLayout>
        </LoadingFallback>
    );
}
