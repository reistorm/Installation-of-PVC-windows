const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    // Сохраняем структуру папок, чтобы не было путаницы
                    filename: 'images/[name][ext]'
                }
            },
        ],
    },
    devServer: {
        hot: true,
        static: {
            directory: './src',
            // было directory: './dist',
            watch: true
        }
    }
}