import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './match.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match) private matchesRepository: Repository<Match>,
  ) {}

  async getMatches(): Promise<Match[]> {
    return await this.matchesRepository.find({
      relations: ['teamGuest', 'teamHome'],
    });
  }

  async getMatch(_id: number): Promise<Match[]> {
    return await this.matchesRepository.find({
      select: ['date', 'season'],
      where: [{ id: _id }],
      relations: ['teamGuest', 'teamHome'],
    });
  }

  async createMatch(match: Match) {
    const m = this.matchesRepository.create(match);
    return this.matchesRepository.save(m);
  }

  async updateMatch(match: Match) {
    this.matchesRepository.save(match);
  }

  async deleteMatch(match: Match) {
    this.matchesRepository.delete(match);
  }
}
