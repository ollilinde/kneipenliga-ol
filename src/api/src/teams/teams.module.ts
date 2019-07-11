import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [TeamsService],
  controllers: [TeamsController],
})
export class TeamsModule {}
