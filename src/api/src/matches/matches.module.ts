import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { Set } from './set.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Match, Set]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [MatchesService],
  controllers: [MatchesController],
})
export class MatchesModule {}
