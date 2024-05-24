import Loading from '@/components/loading/loading';
import React from 'react';

interface LazyLoadComponentProps {
    component: React.ReactElement;
}

export default function LazyLoadFallback({ component }: LazyLoadComponentProps) {
    // const LazyLoadedComponent = React.lazy(
    //     () => import(/* webpackChunkName: "[request]" */ `${importPath}`),
    // );

    return <React.Suspense fallback={<Loading />}>{component}</React.Suspense>;
}
