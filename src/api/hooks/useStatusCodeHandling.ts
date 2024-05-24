import { ReactGenericSetState } from '@/types/types';
import { ResponseErrorData, ResponseErrorMsg } from './useResponseErrorHandling';

export default function useStatusCodeHandling(
    setErrorMsg: ReactGenericSetState<ResponseErrorMsg>,
) {
    const handleStatusCode = function (error: ResponseErrorData) {
        const { message, statusCode } = error;

        switch (statusCode) {
            case 401:
                //account has no session
                break;
            case 403:
                //account role permission changed
                setErrorMsg(message);
                break;
            case 500:
                //internal server error
                setErrorMsg(message);
                break;
            case 502:
                //service not available
                setErrorMsg(message);
                break;
            case 504:
                //request timeout
                setErrorMsg(message);
                break;
            default:
                setErrorMsg(message);
                break;
        }
    };

    return {
        handleStatusCode,
    };
}
