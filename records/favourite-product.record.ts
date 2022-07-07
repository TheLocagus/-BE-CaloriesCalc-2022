import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';
import {ProductEntity} from "../types";

export class FavouriteProductRecord implements ProductEntity {
    id?: string;
    name: string;
    proteins: number;
    carbohydrates: number;
    fats: number;
    calories: number;
    amount: number;

    constructor(obj: FavouriteProductRecord) {
        this.id = obj.id;
        this.name = obj.name;
        this.proteins = Number(obj.proteins.toFixed(2));
        this.carbohydrates = Number(obj.carbohydrates.toFixed(2));
        this.fats = Number(obj.fats.toFixed(2));
        this.calories = Number(obj.calories.toFixed(2));
        this.amount = obj.amount;
    }


}