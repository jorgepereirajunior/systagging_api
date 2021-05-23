import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm'

import Printer from './Printer'
import Tag from './Tag'

@Entity('clients')
export default class Client {

  @PrimaryColumn()
  code: string

  @Column()
  name: string

  @Column()
  flag: string

  @ManyToOne(type => Printer, printer => printer.client)
  @JoinColumn({ name: 'printer_id'})
  printer: Printer

  @OneToMany(type => Tag, tag => tag.client, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'client_code'})
  tags: Tag[]
}