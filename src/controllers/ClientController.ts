import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Client from '../models/Client'

export default {

  async index(req: Request, res: Response) {
    const clientRepository = getRepository(Client)

    const clients = await clientRepository.find()

    return res.json(clients)
  },

  async show(req: Request, res: Response) {
    const { id } = req.params
    const clientRepository = getRepository(Client)

    const client = await clientRepository.findOneOrFail(id)

    return res.json(client)
  },

  async create(req: Request, res: Response)  {
    const clientRepository = getRepository(Client)

    const {
      codigo,
      name,
      flag,
      printer
    } = req.body

    const data = {
      codigo,
      name,
      flag,
      printer
    }

    const client = clientRepository.create(data)

    await clientRepository.save(client)

    return res.status(201).json({ 'message': 'Object Added!'})
  }
}