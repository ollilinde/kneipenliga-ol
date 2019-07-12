import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Team } from '../teams/team.entity';
import { Season } from '../seasons/season.entity';
import { Set } from './set.entity';
import { User } from '../users/user.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Season)
  season: Season;

  @ManyToOne(type => User)
  user: User;

  @Column('date')
  date: Date;

  @Column()
  goalsHome: number;

  @Column()
  goalsGuest: number;

  @ManyToOne(type => Team, team => team.matchesAsHome)
  teamHome: Team;

  @ManyToOne(type => Team, team => team.matchesAsGuest)
  teamGuest: Team;

  @OneToMany(type => Set, set => set.match)
  sets: Set[];
}
