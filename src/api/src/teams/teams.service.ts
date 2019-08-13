import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private teamsRepository: Repository<Team>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getTeams(): Promise<Team[]> {
    return await this.teamsRepository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async getTeam(_id: number): Promise<Team[]> {
    return await this.teamsRepository.find({
      select: ['name', 'slogan'],
      relations: ['members'],
      where: [{ id: _id }],
    });
  }

  async createTeam(team: Team) {
    let s = this.teamsRepository.create(team);
    this.teamsRepository.save(s);
  }

  async updateTeam(team: Team) {
    this.teamsRepository.save(team);
  }

  async deleteTeam(team: Team) {
    this.teamsRepository.delete(team);
  }

  async addEmailToTeam(actionUserId: number, email: string) {
    const actionUser = await this.usersRepository.findOne({
      select: ['id'],
      relations: ['team'],
      where: [{ _id: actionUserId }],
    });
    let userToAdd = await this.usersRepository.findOne({
      select: ['id'],
      relations: ['team'],
      where: [{ email: email }],
    });

    if (!!userToAdd && !userToAdd.team) {
      userToAdd.team = actionUser.team;
      return this.usersRepository.save(userToAdd);
    } else {
      throw new BadRequestException(
        "user isn't registered or already member of a team",
      );
    }
  }
}
