import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {FavouritesEntity, FavouritesJoinedInDatabase, FavouritesProducts, ProductEntity} from "../types";

export class FavouriteMealRecord {

    static async getAll(id: string): Promise<FavouritesJoinedInDatabase[]> {
        const [resultsProducts] = (await pool.execute("SELECT `favourite_products`.`id`, `favourite_meals`.`mealId`, `title`, `name`, `proteins`, `carbohydrates`, `fats`, `calories`, `amount`, `index` FROM `favourite_meals` JOIN `favourite_products` ON `favourite_meals`.`mealId` = `favourite_products`.`mealId` WHERE `favourite_meals`.`userId`=:userId ORDER BY `title`", {
            userId: id,
        })) as [FavouritesJoinedInDatabase[], FieldPacket[]]
        return resultsProducts
    }


    static async updateTitle(title: string, mealId: string) {
        (await pool.execute("UPDATE `favourite_meals` SET `title`=:title WHERE `mealId`=:id", {
            title,
            id: mealId,
        }));
    }
    static async updateValues(product: FavouritesProducts){

            await pool.execute("UPDATE `favourite_products` SET `name`=:name, `proteins`=:proteins, `carbohydrates`=:carbohydrates, `fats`=:fats, `calories`=:calories, `amount`=:amount WHERE `mealId`=:mealId AND `id`=:id", {
                mealId: product.favouriteId,
                id: product.id,
                name: product.name,
                proteins: product.proteins,
                carbohydrates: product.carbohydrates,
                fats: product.fats,
                calories: product.calories,
                amount: product.amount,
            })
        }

    static async add(mealData: any, productsData: any) {
        await pool.execute("INSERT INTO `favourite_meals`(`mealId`, `userId`, `title`) VALUES (:mealId, :userId, :title)", {
            mealId: mealData.mealId,
            userId: mealData.userId,
            title: mealData.title,
        })

        for (const product of productsData) {
            await pool.execute("INSERT INTO `favourite_products`(`mealId`, `id`, `name`, `proteins`, `carbohydrates`, `fats`, `calories`, `amount`, `index`) VALUES (:mealId, :id, :name, :proteins, :carbohydrates, :fats, :calories, :amount, :index)", {
                mealId: product.favouriteId,
                id: product.id,
                name: product.name,
                proteins: product.proteins,
                carbohydrates: product.carbohydrates,
                fats: product.fats,
                calories: product.calories,
                amount: product.amount,
                index: product.index
            })
        }

    }

    static async delete(id: string) {
        await pool.execute("DELETE FROM `favourite_products` WHERE `mealId` = :id", {
            id,
        })
        await pool.execute("DELETE FROM `favourite_meals` WHERE `mealId` = :id", {
            id,
        })
    }
}