import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Printer from '../models/Printer'

export default {

  async index(req: Request, res: Response) {
    const printerRepository = getRepository(Printer)

    const printers = await printerRepository.find()

    return res.json(printers)
  },

  async show(req: Request, res: Response) {
    const {id} = req.params
    const printerRepository = getRepository(Printer)

    const printer = await printerRepository.findOneOrFail(id)

    return res.json(printer)
  },

  async create(req: Request, res: Response) {
    const printerRepository = getRepository(Printer)
  
    const { manufacturer, model } = req.body
  
    const data = { manufacturer, model}
  
    const printer = printerRepository.create(data)
  
    await printerRepository.save(printer)
    
    return res.status(201).json({ 'message': 'Object Added!'})
  }
}