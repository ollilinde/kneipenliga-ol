import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Season } from './season.entity';

@Injectable()
export class SeasonsService {
  constructor(
    @InjectRepository(Season) private seasonsRepository: Repository<Season>,
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
}
