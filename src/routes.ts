import { Router } from 'express'

const routes = Router()

routes.get('/clients', (req,res) => {
  return res.json({
    "msg": "Hello Systagging!"
  })
})

export default routes