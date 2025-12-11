import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv-safe'
import cookieParser from 'cookie-parser'

dotenv.config()


const app = express()


app.use(express.json())
app.use(cookieParser())


app.use('/static', express.static('public'))


export default app