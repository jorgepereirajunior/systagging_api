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
    const { code } = req.params
    const clientRepository = getRepository(Client)

    const client = await clientRepository.findOneOrFail(code)

    return res.json(client)
  },

  async create(req: Request, res: Response)  {
    const clientRepository = getRepository(Client)

    const {
      code,
      name,
      flag,
      printer,
      tags
    } = req.body

    const data = {
      code,
      name,
      flag,
      printer,
      tags
    }

    const client = clientRepository.create(data)

    await clientRepository.save(client)
    // console.log(data)

    return res.status(201).json({ 'message': 'Object Added!'})
  }
}