const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        compress: true,
        port: 3000,
        open: true,
        watchContentBase: true,
        historyApiFallback: true
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                type: "asset/resource",
                test: /\.(png|svg|jpg|gif)$/i,
            },
            {
                test: /\.(otf|pdf|rar)$/,
                loader: "file-loader",
                options: {
                    name: "images/[hash]-[name].[ext]",
                },
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputpath: "video"
                        }
                    }
                ]
            }
        ],
    },
};
