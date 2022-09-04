import { FavouriteMeal } from '../../favourite/favourite-meal.entity';

export interface FavouriteProductInterface {
  id: string;
  favouriteMeal: FavouriteMeal;
  index: number;
  name: string;
  proteins: number;
  carbohydrates: number;
  fats: number;
  calories: number;
  amount: number;
}
