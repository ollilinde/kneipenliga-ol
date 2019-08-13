import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Team } from '../teams/team.entity';

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

  @ManyToMany(type => Team, team => team.seasons)
  teams: Team[];
}
