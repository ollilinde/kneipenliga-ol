import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Match } from './match.entity';

@Entity()
export class Set {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Match)
  match: Match;

  @Column()
  goalsHome: number;

  @Column()
  goalsGuest: number;
}
