module.exports = {
    entry: "./emojis.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" }
        ]
    }
};