import { FavouriteProduct } from '../../favourite/favourite-product.entity';
import { FavouriteProductInterface } from '../favourite-product/favourite-product';
import { User } from '../../user/user.entity';

export interface FavouriteMealInterface {
  id: string;
  user: User;
  title: string;
}

export interface FavouriteMealWithProductsInterface {
  id: string;
  title: string;
  favouritesProducts: FavouriteProductInterface[];
}

export type FavouritesMealsResponse =
  | {
      meals: FavouriteMealWithProductsInterface[];
      success: true;
    }
  | {
      success: false;
      message: string;
    };
