const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer:{
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 3000,
        open: true,
        watchContentBase: true
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                type: "asset",

                test: /\.(png|svg|jpg|gif)$/i,
            },
        ],
    },
};
