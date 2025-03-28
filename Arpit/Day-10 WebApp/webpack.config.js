const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // ✅ Ensure this path is correct
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 3000,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
