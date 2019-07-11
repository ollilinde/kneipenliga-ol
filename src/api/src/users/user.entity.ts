import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Team } from '../teams/team.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  surname: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registeredAt: Date;

  @Column({ length: 255 })
  activationToken: string;

  @Column({ length: 255 })
  passwordHash: string;

  @Column({
    default: false,
  })
  isAdmin: boolean;

  @ManyToOne(type => Team, team => team.members)
  team: Team;
}
