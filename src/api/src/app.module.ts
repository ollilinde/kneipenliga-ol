import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeasonsModule } from './seasons/seasons.module';
import { TeamsModule } from './teams/teams.module';
import { MatchesModule } from './matches/matches.module';
import { IsAdminGuard } from './guards/isAdmin.guard';
import { Match } from './matches/match.entity';
import { Season } from './seasons/season.entity';
import { Team } from './teams/team.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'kneipenliga',
      entities: [Match, Season, Team, User],
    }),
    UsersModule,
    SeasonsModule,
    TeamsModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [AppService, IsAdminGuard],
})
export class AppModule {}
