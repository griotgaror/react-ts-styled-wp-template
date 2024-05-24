const express = require('express');
const path = require('path');
const config = require('./config');
const routes = require('./routes/routes');
const initializeMiddleware = require('./middleware');
const { initializeFakeDatabase } = require('./db/fakeDatabase');

const server = express();

server.set('base', config.baseUrl);
server.use(config.assetsPath, express.static('assets'));

initializeMiddleware(server);

// add routes to server
routes.forEach(({ url, routes }) => {
    server.use(`${`/test-api${config.baseUrl}`}${url}`, routes);
});

// redirection to asset server for build
server.get('/assets/*', function (req, res) {
    const originalUrl = req.originalUrl;
    const redirectUrl =
        config.externalAssetPath + originalUrl.replace('/assets', '');

    res.redirect(redirectUrl);
});

// frontend entry point
server.get(config.baseUrl, function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

server.get('/*', function (req, res) {
    res.redirect(config.baseUrl);
});

const initializeServer = async function () {
    await initializeFakeDatabase();

    server.listen(config.port, function () {
        console.log(`server run on port ${config.port}`);
    });
};

initializeServer();
