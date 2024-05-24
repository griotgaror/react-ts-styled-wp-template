const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (staticDir) => ({
    mode: 'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, `../build`),
        filename: `${staticDir}/[name].[contenthash].js`,
        chunkFilename: `${staticDir}/[name].[contenthash].js`,
        clean: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // parallel: true,
                extractComments: false,
                terserOptions: {
                    compress: true,
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
        splitChunks: {
            cacheGroups: {
                framework: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                    name: 'framework',
                    chunks: 'all',
                    enforce: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/](axios|framer-motion|styled-components)[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
});
