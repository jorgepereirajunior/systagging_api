import express from 'express'

const app = express()

app.listen(process.env.PORT || 3333, () => {
  console.log('Server running on port 3333')
})