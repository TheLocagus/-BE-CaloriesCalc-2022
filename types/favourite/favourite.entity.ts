export interface FavouritesProducts {
    id: string,
    name: string,
    favouriteId: string,
    proteins: number,
    carbohydrates: number,
    fats: number,
    calories: number,
    amount: number,
    index: number
}

export interface FavouritesEntity {
    title: string;
    favouriteId: string;
    userId: string,
    products: FavouritesProducts[]
}

export interface FavouritesTitleEntity {
    title: string;
    favouriteId: string;
    userId: string,
}

export interface FavouritesProductsEntity {
    products: FavouritesProducts[]
}

export interface FavouritesJoinedInDatabase {
    id: string,
    mealId: string,
    title: string;
    name: string;
    proteins: number;
    carbohydrates: number;
    fats: number;
    calories: number;
    amount: number;
    index: number;
}

export interface UpdateTitleEntity {
    title: string;
    mealId: string;
    userId: string;
    whatToChange: 'title';
}

export interface UpdateValuesEntity {
    product: FavouritesProducts;
    userId: string;
    whatToChange: 'values';
}

export interface FavouritesJsonResponse {
    favMeals: FavouritesEntity[],
    success: true,
}