import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('date')
  start: Date;

  @Column('date')
  end: Date;

  @Column()
  maximumSets: number;
}
