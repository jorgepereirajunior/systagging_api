import { Router } from 'express'

import { getRepository } from 'typeorm'
import Printer from './models/Printer'

const routes = Router()

routes.post('/printers', async (req,res) => {
  const printerRepository = getRepository(Printer)

  const { manufacturer, model } = req.body

  const data = { manufacturer, model}

  const printer = printerRepository.create(data)

  await printerRepository.save(printer)
  
  return res.status(201).json({ 'message': 'Object Added!'})
})

export default routes