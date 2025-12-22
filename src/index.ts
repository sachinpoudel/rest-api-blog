import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv-safe'
import cookieParser from 'cookie-parser'
import apiRoutes from './api/api'

dotenv.config()

    
const app = express()


app.use(express.json())
app.use(cookieParser())


app.use('/static', express.static('public'))

app.use('/api', apiRoutes)


export default app