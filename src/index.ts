import 'dotenv/config'
import * as express from 'express'
const port = process.env.HTTP_PORT
const host = process.env.HTTP_HOST
const app = express()
app.use(express.json())
app.listen(port, () => {
  console.info(`🚀 Express is running at http://${host}:${port}/api`)
})
