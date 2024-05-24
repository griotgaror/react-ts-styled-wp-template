const express = require('express');
const path = require('path');
const cors = require('cors');
const { baseUrl } = require('./config');

const setResponseHeader = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    next();
};

module.exports = (server) => {
    server.use(cors());

    server.use(
        baseUrl,
        setResponseHeader,
        express.static(path.join(__dirname, '../build')),
    );
};
