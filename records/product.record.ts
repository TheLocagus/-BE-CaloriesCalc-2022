import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';
import {ProductEntity} from "../types";

export class ProductRecord implements ProductEntity{
    id?: string;
    name: string;
    proteins: number;
    carbohydrates: number;
    fats: number;
    calories: number;
    amount: number;

    constructor(obj: ProductEntity) {
        this.id = obj.id;
        this.name = obj.name;
        this.proteins = Number(obj.proteins.toFixed(2));
        this.carbohydrates = Number(obj.carbohydrates.toFixed(2));
        this.fats = Number(obj.fats.toFixed(2));
        this.calories = Number(obj.calories.toFixed(2));
        this.amount = 100;
    }

    static async findAll(): Promise<ProductRecord[]>{
        const [results] = (await pool.execute("SELECT * FROM `products`")) as [ProductRecord[], FieldPacket[]]
        return results.map((obj: ProductRecord) => new ProductRecord(obj))
    }

    static async findOne(id: string){
        const [results] = (await pool.execute("SELECT * FROM `products` WHERE `id`=:id", {
            id,
        })) as [ProductEntity[], FieldPacket[]] ;

        return results.length === 0 ? null : new ProductRecord(results[0]);

    }

    async insert(): Promise<string>{
        if (!this.id) {
            this.id = uuid()
        }

        await pool.execute("INSERT INTO `products`  VALUES(:name, :proteins, :carbohydrates, :fats, :calories, :amount)", {
            id: this.id,
            name: this.name,
            proteins: this.proteins,
            carbohydrates: this.carbohydrates,
            fats: this.fats,
            calories: this.calories,
            amount: this.amount
        })

        return this.id;
    }

    async delete(){
        await pool.execute("DELETE FROM `products` WHERE `id`=:id", {
            id: this.id,
        })
    }



}