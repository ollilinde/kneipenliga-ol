import { Module } from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { SeasonsController } from './seasons.controller';
import { Season } from './season.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Team } from '../teams/team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Season, Team]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [SeasonsService],
  controllers: [SeasonsController],
})
export class SeasonsModule {}
