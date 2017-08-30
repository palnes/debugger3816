const webpack = require('webpack');
const path = require('path');

const config = {
    context: path.join(__dirname, '/src'),
    entry: './index.jsx',
    output: {
        path: path.join(__dirname, '/public/'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /src.*(\.jsx|\.js)$/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: '/tmp/'
                    }
                }],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        alias: {
            app: path.join(__dirname, '/src'),
            test1: path.join(__dirname, '/src/test1'),
            test2: path.join(__dirname, '/src/test2'),
        },
        extensions: ['.js', '.jsx']
    },
    stats: {
        children: false
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 9000
    }
};

module.exports = config;
