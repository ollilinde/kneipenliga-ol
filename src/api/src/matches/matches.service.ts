import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './match.entity';
import { Set } from './set.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match) private matchesRepository: Repository<Match>,
    @InjectRepository(Set) private setsRepository: Repository<Set>,
  ) {}

  async getMatches(): Promise<Match[]> {
    return await this.matchesRepository.find({
      relations: ['sets', 'teamGuest', 'teamHome'],
    });
  }

  async getMatch(_id: number): Promise<Match[]> {
    return await this.matchesRepository.find({
      select: ['date', 'season'],
      where: [{ id: _id }],
      relations: ['sets', 'teamGuest', 'teamHome'],
    });
  }

  async createMatch(match: Match) {
    let m = this.matchesRepository.create(match);
    const ma = await this.matchesRepository.save(m);
    if (match.sets && match.sets.length > 0) {
      for (let i = 0; i < match.sets.length; i++) {
        const data = {
          ...match.sets[i],
          match: { id: ma.id },
        };
        let s = this.setsRepository.create(data);
        this.setsRepository.save(s);
      }
    }
    return ma;
  }

  async updateMatch(match: Match) {
    this.matchesRepository.save(match);
  }

  async deleteMatch(match: Match) {
    this.matchesRepository.delete(match);
  }

  async addSet(set: Set) {
    const s = await this.setsRepository.create(set);
    return await this.setsRepository.save(s);
  }
}
