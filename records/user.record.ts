import {ProductEntity, UserEntity} from "../types";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";

export class UserRecord implements UserEntity {
    id?: string;
    username: string;
    password: string;

    constructor(obj: UserEntity) {
        this.id = obj.id;
        this.username = obj.username;
        this.password = obj.password;
    }

    static async findOne(id: string){
        const [results] = (await pool.execute("SELECT * FROM `users` WHERE `id`=:id", {
            id,
        })) as [UserRecord[], FieldPacket[]] ;

        return results.length === 0 ? null : new UserRecord(results[0]);

    }

    static async findByUsername(username: string){
        const [results] = (await pool.execute("SELECT * FROM `users` WHERE `username`=:username", {
            username,
        })) as [UserRecord[], FieldPacket[]] ;

        return results.length === 0 ? null : new UserRecord(results[0]);

    }

    async create(): Promise<string>{
        if (!this.id) {
            this.id = uuid()
        }

        await pool.execute("INSERT INTO `users` VALUES(:id, :username, :password)", {
            id: this.id,
            username: this.username,
            password: this.password,
        })

        return this.id;
    }

    async update(): Promise<void> {
        await pool.execute("UPDATE `users` SET `username` = :username, `password` = :password WHERE `id` = :id", {
            id: this.id,
            username: this.username,
            password: this.password,
        });
    }
}