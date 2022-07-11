import {FavouritesEntity, FavouritesJoinedInDatabase, FavouritesProducts} from "../types";

export const convertDatabaseDatasToFrontEndDatas = (dataFromDatabase: FavouritesJoinedInDatabase[], userId: string) => {
    const correctValues = dataFromDatabase.map(value => ({
        ...value,
        proteins: Math.round(value.proteins * 10) / 10,
        carbohydrates: Math.round(value.carbohydrates * 10) / 10,
        fats: Math.round(value.fats * 10) / 10,
        calories: Math.round(value.calories * 10) / 10,
    }))
    const mealsAsString = correctValues.map(product => (
        {
            title: product.title,
            favouriteId: product.mealId,
            userId,
        }
    ))
        .map(item => JSON.stringify(item))

    const meals = [...new Set(mealsAsString)].map(meal => JSON.parse(meal))

    const products = correctValues.map(product => (
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
    console.log(favMeals[0].products)

    return favMeals;
}