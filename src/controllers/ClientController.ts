import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Client from '../models/Client'

export default {

  async index(req: Request, res: Response) {
    const clientRepository = getRepository(Client)

    const clients = await clientRepository.find({
      relations: ['printer', 'tags']
    })

    return res.json(clients)
  },

  async show(req: Request, res: Response) {
    const { code } = req.params
    const clientRepository = getRepository(Client)

    const client = await clientRepository.findOneOrFail(code, {
      relations: ['printer', 'tags']
    })

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
  },

  async update(req: Request, res: Response) {
    const { code } = req.params
    const clientRepository = getRepository(Client)

    const client = await clientRepository.findOne({
      where:{code: code}
    })

    const {
      name,
      flag,
      printer
    } = req.body

    const data = {
      name,
      flag,
      printer
    }
    if (client) {
      await clientRepository.update(code, data)
      return res.status(200).json({ 'message': 'Object Updated!'})
    } else {
      return res.status(404).json({ 'message': 'Object not found!'})
    }
  },

  async delete(req: Request, res: Response) {
    const { code } = req.params
    const clientRepository = getRepository(Client)

    const client = await clientRepository.findOne({
      where:{code: code}
    })

    if (client) {
      await clientRepository.delete(code)
      return res.status(200).json({ 'message': 'Object Deleted!'})
    } else {
      return res.status(404).json({ 'message': 'Object not found!'})
    }

  }
}