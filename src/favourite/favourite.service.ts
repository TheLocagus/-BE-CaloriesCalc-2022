import { Injectable } from '@nestjs/common';
import { FavouriteMeal } from './favourite-meal.entity';
import { FavouriteProduct } from './favourite-product.entity';
import {
  FavouriteMealWithProductsInterface,
  FavouritesMealsResponse,
} from '../types/favourite-meal';

@Injectable()
export class FavouriteService {
  async getAll(userId): Promise<FavouritesMealsResponse> {
    try {
      const favouriteMeals = await FavouriteMeal.find({
        relations: { user: true },
        where: { user: { id: userId } },
      });
      console.log(favouriteMeals);

      const favouritesMealsToResponse: FavouriteMealWithProductsInterface[] =
        [];

      for (const meal of favouriteMeals) {
        const favouritesProducts = await FavouriteProduct.find({
          where: { favouriteMeal: { id: meal.id } },
          order: { index: 'ASC' },
        });
        const favouriteMealToResponse = {
          id: meal.id,
          title: meal.title,
          favouritesProducts,
        };
        favouritesMealsToResponse.push(favouriteMealToResponse);
      }

      return {
        meals: favouritesMealsToResponse,
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        message: 'Something went wrong with getting favouritesMeals.',
      };
    }
  }
}
