import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import Client from '../models/Client'

@Entity('tags')
export default class Tag {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  type: string

  @Column()
  height: number

  @Column()
  width: number

  @Column()
  items: string

  @ManyToOne(type => Client, client => client.tags)
  @JoinColumn({ name: 'client_code'})
  client: Client
}