const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

const appConfig = require('./app.config.js');
const tsTransformer = require('./webpack/webpack.ts-transformers');

const devConfig = require('./webpack/webpack.dev.js');
const prodConfig = require('./webpack/webpack.prod.js');

module.exports = function (_, argv) {
    const isProd = argv.env.prod;
    const staticDir = 'static';

    const globalVariables = appConfig(argv);
    const envConfig = isProd ? prodConfig(staticDir) : devConfig(staticDir);

    console.log(argv.env);

    return {
        ...envConfig,
        entry: {
            index: './src/index.tsx',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/template.html',
                title: globalVariables.__PROJECT_TITLE__,
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
            new ForkTsCheckerWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: `${staticDir}/[name].[contenthash].css`,
            }),
            new Webpack.DefinePlugin(globalVariables),
            !isProd &&
                new ReactRefreshPlugin({
                    overlay: false,
                }),
        ],
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        transpileOnly: true,
                        getCustomTransformers: isProd ? {} : tsTransformer,
                    },
                },
                {
                    test: /\.(c|sc|sa)ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpg|ico|ttf|webp)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: `${staticDir}/assets/[name][ext]`,
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    };
};
