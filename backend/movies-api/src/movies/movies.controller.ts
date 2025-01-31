/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { OmdbService } from '../omdb/omdb.service';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly omdbService: OmdbService,
  ) {}

  @Post('search')
  async search(@Body('query') query: string) {
    const response = await this.omdbService.getMovieDetails(query).toPromise();
    return response!.data;
  }

  @Post()
  async create(@Body() createMovieDto: any) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll() {
    return this.moviesService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateMovieDto: any) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.moviesService.remove(id);
  }
}
