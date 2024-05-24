interface CreateEnpointUrlProps {
    routeUrl: string;
}

export const createEnpointUrl = function ({ routeUrl }: CreateEnpointUrlProps) {
    const apiUrl = __IS_PRODUCTION__ ? __API_URL__ : __TEST_API_URL__;
    const apiRequstUrl = apiUrl + routeUrl;

    return apiRequstUrl;
};
