import { Module } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [OmdbService],
  exports: [OmdbService], // Make sure it's exported so that other modules can use it
})
export class OmdbModule {}
