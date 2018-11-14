/* 
 * This file is the configurations file for webpack.
 * It dictates the entrypoint for compilations and the
 * output file as well. We set our mode to development,
 * and our module object describes what loaders should be 
 * used to compile the project.
*/



module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + "/static/dist/",
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /dist/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss?$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }

        ]
    }
}