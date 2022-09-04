import { Controller, Get, Param } from '@nestjs/common';
import { FavouriteService } from './favourite.service';

@Controller('api/favourite')
export class FavouriteController {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Get('/:userId')
  getAll(@Param('userId') userId: string) {
    return this.favouriteService.getAll(userId);
  }
}
