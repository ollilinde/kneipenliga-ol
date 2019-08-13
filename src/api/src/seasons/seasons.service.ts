import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Raw, Connection } from 'typeorm';
import { Season } from './season.entity';
import { Match } from '../matches/match.entity';
import { Team } from '../teams/team.entity';
import { of } from 'rxjs';

@Injectable()
export class SeasonsService {
  constructor(
    @InjectRepository(Season) private seasonsRepository: Repository<Season>,
    @InjectRepository(Team) private teamsRepository: Repository<Team>,
    private connection: Connection,
  ) {}

  async getSeasons(): Promise<Season[]> {
    return await this.seasonsRepository.find();
  }

  async getSeason(_id: number): Promise<Season[]> {
    return await this.seasonsRepository.find({
      select: ['name', 'start', 'end', 'maximumSets'],
      where: [{ id: _id }],
    });
  }

  async createSeason(season: Season) {
    let s = this.seasonsRepository.create(season);
    this.seasonsRepository.save(s);
  }

  async updateSeason(season: Season) {
    this.seasonsRepository.save(season);
  }

  async deleteSeason(season: Season) {
    this.seasonsRepository.delete(season);
  }

  async getCurrentTable() {
    const season = await this.connection
      .getRepository(Season)
      .createQueryBuilder('season')
      .leftJoinAndSelect('season.teams', 'team')
      .where('season.start < NOW() AND season.end > NOW()')
      .getOne();

    let table = [];

    for (let i = 0; i < season.teams.length; i++) {
      const team = season.teams[i];
      const teamWithMatches = await this.teamsRepository.findOne(team.id, {
        relations: ['matchesAsHome', 'matchesAsGuest'],
      });

      let points = 0,
        goals = 0,
        opponentGoals = 0;

      teamWithMatches.matchesAsGuest.forEach(match => {
        goals += match.goalsGuest;
        opponentGoals += match.goalsHome;
        if (match.goalsGuest > match.goalsHome) points += 1;
      });
      teamWithMatches.matchesAsHome.forEach(match => {
        goals += match.goalsHome;
        opponentGoals += match.goalsGuest;
        if (match.goalsGuest < match.goalsHome) points += 1;
      });

      table.push({
        team,
        points,
        goals,
        opponentGoals,
        goalDiff: goals - opponentGoals,
      });
    }

    table.sort((a, b) => {
      if (a.points === b.points) {
        if (a.goalDiff > b.goalDiff) return -1;
        else return 1;
      } else {
        if (a.points > b.points) return -1;
        else return 1;
      }
    });

    return table;
  }
}
