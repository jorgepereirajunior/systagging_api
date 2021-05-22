import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('printers')
export default class Printer {
  
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  manufacturer: string

  @Column()
  model: string
}