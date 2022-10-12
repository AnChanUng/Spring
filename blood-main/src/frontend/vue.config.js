const { defineConfig } = require("@vue/cli-service");
const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, "../" + "main/resources/static"),
    devServer: {
        port: 8091,
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                ws: true,
                changeOrigin: true
            },

        },
 },
}
//
//const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
//module.exports = defineConfig({
//  transpileDependencies: true,
//  lintOnSave: false,
//  configureWebpack: {
//    target:'node',
//    plugins: [new NodePolyfillPlugin()],
//    optimization: {
//      splitChunks: {
//        chunks: "all",
//      },
//    },
//  },
//});


