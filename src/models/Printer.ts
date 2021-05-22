import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import Client from './Client'

@Entity('printers')
export default class Printer {
  
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  manufacturer: string

  @Column()
  model: string

  @OneToMany(type => Client, client => client.printer)
  @JoinColumn({ name: 'printer_id'})
  client: Client[]
}