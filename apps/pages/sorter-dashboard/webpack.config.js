const {ModuleFederationPlugin} = require("webpack").container
const HtmlWebpackPlugin = require("html-webpack-plugin")
const appInsightScript = require("@next/logger").APPINSIGHTS_SCRIPT
// const path = require("path")

module.exports = {
    entry: "./index.js",
    mode: "development",
    devtool: "hidden-source-map",
    output: {
        publicPath: "http://localhost:3003/",
        clean: true,
    },
    resolve: {
        extensions: [".jsx", ".js", ".json", ".css", ".scss", ".jpg", "jpeg", "png"],
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: "url-loader",
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "sorter_dashboard",
            remotes: {
                "runtime-library": "runtime_library@http://localhost:3000/remoteEntry.js",
                "sample-mfe": "sample_mfe@http://localhost:3001/remoteEntry.js",
                nav: "nav@http://localhost:3005/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            appInsightScript: process.env.REACT_APP_APPINSIGHTS_KEY
                ? appInsightScript(process.env.REACT_APP_APPINSIGHTS_KEY)
                : "",
        }),
    ],
}
