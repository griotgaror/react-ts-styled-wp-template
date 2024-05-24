module.exports = function () {
    const PORT = 5050;

    return {
        mode: 'development',
        devtool: 'eval-source-map',
        output: {
            publicPath: '/',
            filename: '[name].js',
        },
        devServer: {
            compress: false,
            port: PORT,
            hot: true,
            // liveReload: true,
            historyApiFallback: true,
            proxy: [
                {
                    context: ['/assets', '/api'],
                    target: 'https://192.168.178.70/',
                    secure: false,
                },
                {
                    context: ['/test-api'],
                    target: 'http://192.168.178.64:3232',
                    ws: true,
                    changeOrigin: true,
                },
            ],
        },
    };
};
