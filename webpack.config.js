const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = (env, argv) => {
    return (argv.mode === "production")
        ? prodConfig
        : devConfig;
};

const prodConfig =  {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            inject: "body"
        }),
        new MiniCssExtractWebpackPlugin({
            filename: "styles.[contenthash].css"
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: "./src/assets",
        //             to: "./assets"
        //         }
        //     ]
        // }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                },{
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    exclude: /(node_modules|bower_components)/,
                },
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractWebpackPlugin.loader,
            //         "css-loader"
            //     ]
            // },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractWebpackPlugin.loader,
    
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            "..."
        ]
    }
};

const devConfig = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        port: 7008,
        static: "./build",
        watchFiles: ["./src/index.pug"],
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            inject: "body"
        }),
        new MiniCssExtractWebpackPlugin({
            filename: "styles.css"
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: "./src/assets",
        //             to: "./assets"
        //         }
        //     ]
        // }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                },{
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    exclude: /(node_modules|bower_components)/,
                },
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractWebpackPlugin.loader,
            //         "css-loader"
            //     ]
            // },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractWebpackPlugin.loader,
    
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
};