import Express from 'express'
import Mongoose from 'mongoose'
import сonfig from './config'

Mongoose.connect(сonfig.databaseUrl, { useNewUrlParser: true })

const app = Express()

app.listen(3000, () => {
    console.log('server started.')
})