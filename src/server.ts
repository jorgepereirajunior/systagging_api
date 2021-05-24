import express from 'express'
import './database/connection'

import dotenv from 'dotenv'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

dotenv.config()

app.listen(process.env.PORT || 3333, () => {
  console.log('Server running on port 3333')
})