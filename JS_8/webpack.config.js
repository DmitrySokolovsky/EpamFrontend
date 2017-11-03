const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
        {
            test: /\.js$/,
            include: [path.resolve(__dirname, "dist")],
            exclude: [path.resolve(__dirname, "node_modules")],
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
        
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})        
    ],
    resolve:{
        modules: ['node_modules']
    }
};



