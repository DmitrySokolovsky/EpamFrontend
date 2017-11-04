const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;


module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: [path.resolve(__dirname, "node_modules")],
            loader: "babel-loader",
            query: {
                presets: ["es2015","react","stage-0"]
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
        
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"})        
    ],
    resolve:{
        modules: ['node_modules']
    },
    devServer: {    
        contentBase: path.join(__dirname, "dist"),           
        port: 8080
    }
};

