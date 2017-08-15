const config = require('./webpack.config');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

config.entry.app.push("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");
const compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    hot:true,
    contentBase: '/dist'
});
server.listen(8081);