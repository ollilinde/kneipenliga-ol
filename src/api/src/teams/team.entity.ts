import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Match } from '../matches/match.entity';
import { User } from '../users/user.entity';
import { Season } from '../seasons/season.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 255 })
  slogan: string;

  @OneToMany(type => Match, match => match.teamHome)
  matchesAsHome: Match[];

  @OneToMany(type => Match, match => match.teamGuest)
  matchesAsGuest: Match[];

  @OneToMany(type => User, user => user.team)
  members: User[];

  @ManyToMany(type => Season, season => season.teams)
  @JoinTable()
  seasons: Season[];
}
