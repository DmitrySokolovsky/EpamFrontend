const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglyPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common,{
    plugins: [
        new UglyPlugin()        
    ]
});