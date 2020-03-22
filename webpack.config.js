require('dotenv').config()
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './client/index.js',
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "server/public")
    }
}