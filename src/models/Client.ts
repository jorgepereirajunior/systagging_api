import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import Printer from './Printer'

@Entity('clients')
export default class Client {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  codigo: string

  @Column()
  name: string

  @Column()
  flag: string

  @ManyToOne(type => Printer, printer => printer.client)
  @JoinColumn({ name: 'printer_id'})
  printer: Printer
}