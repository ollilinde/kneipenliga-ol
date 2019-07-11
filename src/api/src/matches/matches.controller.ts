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
import { MatchesService } from './matches.service';
import { Match } from './match.entity';
import { Set } from './set.entity';
import { AuthGuard } from '@nestjs/passport';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@Controller('matches')
export class MatchesController {
  constructor(private service: MatchesService) {}

  @Get()
  getAll() {
    return this.service.getMatches();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getMatch(params.id);
  }

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() match: Match) {
    return this.service.createMatch(match);
  }

  @Put()
  @UseGuards(AuthGuard(), IsAdminGuard)
  update(@Body() match: Match) {
    return this.service.updateMatch(match);
  }

  @Post('sets')
  @UseGuards(AuthGuard())
  postSet(@Body() set: Set) {
    return this.service.addSet(set);
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), IsAdminGuard)
  deleteMatch(@Param() params) {
    return this.service.deleteMatch(params.id);
  }
}
