/**
 * @since 2017-06-08 10:45:37
 * @author vivaxy
 */

module.exports = {
    entry: './demo/source',
    output: {
        filename: './demo/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
            },
        ],
    },
};
