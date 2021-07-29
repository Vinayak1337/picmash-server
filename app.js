import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import fs from 'fs'

import SignInRouter from './src/Routes/signIn.js'
import ImagesRouter from './src/Routes/images.js'
import PostRouter from './src/Routes/posts.js'
import VerifyRouter from './src/Routes/verify.js'
dotenv.config();

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/signin', SignInRouter)
app.use('/posts', PostRouter)
app.use('/verify', VerifyRouter)
app.use('/images', ImagesRouter)
app.use('/images', express.static('./src/postImages'))

app.use('/', (_req, res) => {
    const html = fs.readFileSync('./dist/index.html', 'utf8')
    res.send(html)
})


mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(() => {
    console.log('✅ Connected to database.')

    app.listen(process.env.PORT || 8080, () => {
        console.log(`✅ Connected to port ${process.env.PORT || 8080}.`)
    })
})
.catch(console.error)
