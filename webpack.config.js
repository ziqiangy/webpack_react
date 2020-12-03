const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:{
        app: path.join(__dirname, './src/index.js')
    },
    output:{
        filename: 'boundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.join(__dirname, 'node_modules'),
                use: ['babel-loader']
            },
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        })
    ]
}