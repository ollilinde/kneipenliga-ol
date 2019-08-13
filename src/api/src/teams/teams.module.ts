import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { PassportModule } from '@nestjs/passport';
import { User } from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team, User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [TeamsService],
  controllers: [TeamsController],
})
export class TeamsModule {}
