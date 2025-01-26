import express, { Express } from 'express'
import cors from 'cors'
import { getEmailRouter } from './routes'

const app: Express = express()

const corsOptions = {
  origin: '*',
  methods: 'POST',
}

const jsonBodyMiddleware = express.json()
const urlencodedMiddleware = express.urlencoded({ extended: false })
const corsMiddleware = cors(corsOptions)

app.use(corsMiddleware)
app.use(urlencodedMiddleware)
app.use(jsonBodyMiddleware)

const emailRouter = getEmailRouter()

app.use('', emailRouter)

export default app
