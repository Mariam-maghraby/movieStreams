/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class OmdbService {
  constructor(private readonly httpService: HttpService) {}

  getMovieDetails(query: string): Observable<AxiosResponse<any>> {
    const apiKey = process.env.OMBDB_API_KEY; // Get your OMDb API key from https://www.omdbapi.com/
    try {
      return this.httpService.get(
        `http://www.omdbapi.com/?t=${query}&apikey=${apiKey}`,
      );
    } catch (error) {
      throw new HttpException(
        'Failed to fetch movie details' + ' ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
