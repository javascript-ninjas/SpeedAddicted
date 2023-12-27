module.exports = {
    mode: "development",

    resolve: {
        extensions: ['.scss', '.es6.js', '.js', '']
    },

    entry: __dirname + '/app/scripts/core/main.es6.js',

    output: {
        path: __dirname + '/app/dist/',
        filename: 'bundle.js'
    },

    // http://webpack.github.io/docs/configuration.html#devtool
    // devtool: "#cheap-module-source-map",

    module: {
        rules: [
            {
                test: /\.es6.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(htm|html)$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    }
};
