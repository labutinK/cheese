const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']},
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader'],
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `fonts/[name][ext][query]`
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `img/[name].[contenthash][ext]`,
                },
            },
            {
                resourceQuery: /template/,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index/index.html',
            inject: true,
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about/index.html',
            inject: true,
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/our-brands/index.html',
            inject: true,
            filename: 'our-brands.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/brand-detail/index.html',
            inject: true,
            filename: 'brand-detail.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/catalog/index.html',
            inject: true,
            filename: 'catalog.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        port: 3300,
        watchFiles: ['src/layout/header.html', 'src/layout/footer.html'],
    }
};