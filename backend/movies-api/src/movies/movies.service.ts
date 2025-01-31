import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Movie } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(movieData: {
    title: string;
    year: string;
    director: string;
    genre: string;
    poster: string;
  }): Promise<Movie> {
    return this.prisma.movie.create({
      data: movieData,
    });
  }

  async findAll(): Promise<Movie[]> {
    return this.prisma.movie.findMany();
  }

  async update(
    id: number,
    movieData: {
      title: string;
      year: string;
      director: string;
      genre: string;
      poster: string;
    },
  ): Promise<Movie> {
    return this.prisma.movie.update({
      where: { id },
      data: movieData,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.movie.delete({
      where: { id },
    });
  }
}
