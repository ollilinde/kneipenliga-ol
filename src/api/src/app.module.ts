import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeasonsModule } from './seasons/seasons.module';
import { TeamsModule } from './teams/teams.module';
import { MatchesModule } from './matches/matches.module';
import { IsAdminGuard } from './guards/isAdmin.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    SeasonsModule,
    TeamsModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [AppService, IsAdminGuard],
})
export class AppModule {}
