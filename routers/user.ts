import express from 'express';
import {FavouriteMealRecord} from "../records/favourite-meal.record";
import {FavouritesEntity, FavouritesJsonResponse, UpdateTitleEntity, UpdateValuesEntity} from "../types";
import {convertDatabaseDatasToFrontEndDatas} from "../utils/convertDatabaseDatasToFrontEndDatas";
import {verifyTokenAndUserWithBody, verifyTokenAndUserWithParams} from "../utils/verifyToken";
import {createError} from "../utils/error";

export const userRouter = express.Router();

userRouter
    .get('/:id/favourites', verifyTokenAndUserWithParams, async (req, res, next) => {
        const {id} = req.params
        try {
            const favProducts = await FavouriteMealRecord.getAll(id);

            const favMeals = convertDatabaseDatasToFrontEndDatas(favProducts, id);
            res.json({
                favMeals,
                success: true
            });
        } catch (e){
            next(e)
        }

    })
    .put('/favourites', verifyTokenAndUserWithBody, async (req, res, next) => {
        const data: UpdateTitleEntity | UpdateValuesEntity = req.body

        try {
            if (data.whatToChange === 'values'){
                if(data.product.amount > 999999){
                    return next(createError(400, "Too large number."))
                }
                await FavouriteMealRecord.updateValues((data as UpdateValuesEntity).product);
            }
            if (data.whatToChange === 'title'){
                const {title, mealId} = data as UpdateTitleEntity
                await FavouriteMealRecord.updateTitle(title, mealId);
            }
            const favProducts = await FavouriteMealRecord.getAll(data.userId);
            const favMeals = convertDatabaseDatasToFrontEndDatas(favProducts, data.userId);
            res.json({
                favMeals,
                success: true,
            } as FavouritesJsonResponse)
        } catch (e){
            next(e)
        }
    })

    .post('/favourites', verifyTokenAndUserWithBody,  async (req, res, next) => {
        const data: FavouritesEntity = req.body;
        try {
            const mealData = {
                title: data.title,
                mealId: data.favouriteId,
                userId: data.userId,
            }

            const productsData = data.products;

            await FavouriteMealRecord.add(mealData, productsData);

            res.status(200).json({
                success: true,
            })
        } catch(e){
            next(e);
        }

    })
    .delete('/favourites', verifyTokenAndUserWithBody, async (req, res, next) => {
        const data = req.body;
        try {
            await FavouriteMealRecord.delete(data.mealId);
            const favProducts = await FavouriteMealRecord.getAll(data.userId);

            const favMeals = convertDatabaseDatasToFrontEndDatas(favProducts, data.userId);

            res.json({
                favMeals,
                success: true,
            })
        } catch(e){
            next(e);
        }
    })
