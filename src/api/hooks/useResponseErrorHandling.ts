import { AxiosError } from 'axios';
import React from 'react';
import useStatusCodeHandling from './useStatusCodeHandling';

interface ApiResponseErrorMsg {
    detail: string;
}

export type ResponseErrorMsg = string | undefined;

export interface ResponseErrorData {
    name?: string;
    message: string;
    statusCode: number | null;
}

export default function useResponseErrorHandling() {
    const [errorMsg, setErrorMsg] = React.useState<ResponseErrorMsg>(undefined);
    const { handleStatusCode } = useStatusCodeHandling(setErrorMsg);

    const handleResponseError = function (error: AxiosError) {
        const { response, request } = error;

        const errorDetails: ResponseErrorData = {
            name: 'AxiosResponseIntercepter',
            message: '',
            statusCode: 500,
        };

        if (response) {
            // Fehler bei der Antwort von der API
            const data = response.data as ApiResponseErrorMsg;
            errorDetails.message =
                data.detail || 'Der Dienst ist gerade nicht erreichbar';
            errorDetails.statusCode = response.status;
        } else if (request) {
            // Fehler ohne Antwort
            errorDetails.message = request.message || 'No Error Message';
            errorDetails.statusCode = request.status;
        } else {
            // Fehler beim Einrichten der Anfrage
            errorDetails.message = 'Fehler beim Einrichten der Anfrage';
            errorDetails.statusCode = 400;
        }

        handleStatusCode(errorDetails);
    };

    return {
        errorMsg,
        handleResponseError,
        setErrorMsg,
    };
}
