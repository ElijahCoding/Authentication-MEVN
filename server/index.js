import Express from 'express'
import Mongoose from 'mongoose'
import config from '@config'
import v1Router from '@routes'
import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

const app = Express()

const compiler = Webpack(WebpackConfig)

app.use(
    WebpackDevMiddleware(compiler, {
        hot: true,
        publicPath: WebpackConfig.output.publicPath
    })
)

app.use(v1Router)

app.listen(3000, () => {
    console.log('server started.')
})
