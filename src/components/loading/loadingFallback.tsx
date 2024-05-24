import { ResponseErrorMsg } from '@/api/hooks/useResponseErrorHandling';
import Loading from '@/components/loading/loading';
import React from 'react';

interface LoadingFallbackProps {
    children: React.ReactNode;
    isLoading: boolean;
    message?: string;
    errorMsg?: ResponseErrorMsg;
}

export default function LoadingFallback({
    children,
    isLoading,
    message,
    errorMsg,
}: LoadingFallbackProps) {
    if (isLoading || errorMsg) {
        return <Loading message={errorMsg || message} />;
    }

    return <>{children}</>;
}
