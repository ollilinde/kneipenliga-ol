import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { Season } from './season.entity';
import { AuthGuard } from '@nestjs/passport';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@Controller('seasons')
export class SeasonsController {
  constructor(private service: SeasonsService) {}

  @Get()
  getAll() {
    return this.service.getSeasons();
  }

  @Get('table')
  getTable() {
    return this.service.getCurrentTable();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getSeason(params.id);
  }

  @Post()
  @UseGuards(AuthGuard(), IsAdminGuard)
  create(@Body() season: Season) {
    return this.service.createSeason(season);
  }

  @Put()
  @UseGuards(AuthGuard(), IsAdminGuard)
  update(@Body() season: Season) {
    return this.service.updateSeason(season);
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), IsAdminGuard)
  deleteSeason(@Param() params) {
    return this.service.deleteSeason(params.id);
  }
}
