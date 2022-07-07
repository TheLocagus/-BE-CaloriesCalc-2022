import {FavouritesEntity, FavouritesJoinedInDatabase, FavouritesProducts} from "../types";

export const convertDatabaseDatasToFrontEndDatas = (dataFromDatabase: FavouritesJoinedInDatabase[], userId: string) => {
    const mealsAsString = dataFromDatabase.map(product => (
        {
            title: product.title,
            favouriteId: product.mealId,
            userId,
        }
    ))
        .map(item => JSON.stringify(item))

    const meals = [...new Set(mealsAsString)].map(meal => JSON.parse(meal))

    const products = dataFromDatabase.map(product => (
        {
            favouriteId: product.mealId,
            name: product.name,
            proteins: product.proteins,
            carbohydrates: product.carbohydrates,
            fats: product.fats,
            calories: product.calories,
            amount: product.amount,
            id: product.id,
            index: product.index
        } as FavouritesProducts
    ))

    const favMeals: FavouritesEntity[] = []

    for (const meal of meals) {
        const comparedProducts: FavouritesProducts[] = products.filter(item => item.favouriteId === meal.favouriteId);
        const favMeal: FavouritesEntity = {
            title: meal.title,
            favouriteId: meal.favouriteId,
            userId: meal.userId,
            products: comparedProducts
        }
        favMeals.push(favMeal);
    }
    return favMeals;
}