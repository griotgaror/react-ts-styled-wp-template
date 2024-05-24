// When you add or Edit new Global Values
// then Edit webpack.definePlugin.d.ts,
// and restart the dev Server

const projectTitle = 'This is the Title';
const testApiUrl = '/test-api';
const apiUrl = '/api';

module.exports = function (isProd) {
    return {
        __PROJECT_TITLE__: projectTitle,
        __IS_PRODUCTION__: isProd,
        __TEST_API_URL__: JSON.stringify(testApiUrl),
        __API_URL__: JSON.stringify(apiUrl),
    };
};
