import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './team.entity';
import { AuthGuard } from '@nestjs/passport';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@Controller('teams')
export class TeamsController {
  constructor(private service: TeamsService) {}

  @Get()
  getAll() {
    return this.service.getTeams();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  get(@Param() params) {
    return this.service.getTeam(params.id);
  }

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() team: Team) {
    const t = this.service.createTeam(team);
  }

  @Put()
  @UseGuards(AuthGuard())
  update(@Body() team: Team) {
    return this.service.updateTeam(team);
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), IsAdminGuard)
  deleteTeam(@Param() params) {
    return this.service.deleteTeam(params.id);
  }
}
