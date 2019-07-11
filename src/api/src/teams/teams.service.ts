import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private teamsRepository: Repository<Team>,
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
}
