const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;


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
    },
    devServer: {        
        contentBase: path.join(__dirname, "dist"),        
        port: 8080,        
        hotOnly: true
    }
};

if (NODE_ENV == 'production') {    
    module.exports.plugins.push(    
        new webpack.optimize.UglifyJsPlugin({    
            compress: {                       
                drop_console: true    
            }    
        })    
    );    
}

