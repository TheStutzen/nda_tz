import 'dotenv/config'
import * as express from 'express'
import { Routes } from './routes'
import i18n from './locales'

const port = process.env.HTTP_PORT
const host = process.env.HTTP_HOST

const app = express()

app.use(i18n.init)
app.use(express.json())

new Routes(app)

app.listen(port, () => {
  console.info(`🚀 Express is running at http://${host}:${port}/api`)
})
