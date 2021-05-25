import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Tag from '../models/Tag'

export default {

  async index(req: Request, res: Response) {
    const tagRepository = getRepository(Tag)

    const tags = await tagRepository.find({
      relations: ['client']
    })

    return res.json(tags)
  }
}