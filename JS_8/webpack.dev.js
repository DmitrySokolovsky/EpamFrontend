const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devServer: {    
        contentBase: path.join(__dirname, "dist"),           
        port: 8081
    },
    plugins:[
        new webpack.NamedModulesPlugin(),       
        new webpack.HotModuleReplacementPlugin()]
});