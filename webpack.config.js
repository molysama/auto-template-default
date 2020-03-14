const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const JavascriptObfuscator = require("webpack-obfuscator")

const dictionary = []
for (let i = 128; i < 200; i++) {
    dictionary.push(
        i
            .toString(2)
            .replace(/1/g, "ν")
            .replace(/0/g, "v")
    )
}

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2"
    },
    target: "node",

    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new JavascriptObfuscator({
            compact: true,
            identifierNamesGenerator: "dictionary",
            identifiersDictionary: dictionary,

            // 生成的代码环境，可选browser、browser-no-eval、node
            target: "browser-no-eval",
            // 混淆对象键名
            transformObjectKeys: false,
            // 转义为Unicode，会大大增加体积，还原也比较容易，建议只对小文件使用
            unicodeEscapeSequence: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
}
