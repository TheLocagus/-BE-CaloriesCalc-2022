import express from 'express';
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../utils/JWT_SECRET";
import {UserRecord} from "../records/user.record";
import bcrypt from "bcrypt";

interface JwtUserEntity {
    id: string,
    username: string,
    iat: number
}

export const changePasswordRouter = express.Router();

changePasswordRouter

    .put('/', async (req, res) => {
        const {token, password, repeatedPassword} = req.body;

        try {
            if(token === null || token === undefined){
                res.json({
                    status: 'error',
                    error: 'None is logged in.'
                })
                throw new Error('None is logged in.')
            }
            const user: any = jwt.verify(token, JWT_SECRET);

            if (password !== repeatedPassword){
                res.json({
                    status: 'error',
                    error: 'There are no the same passwords.'
                });
                throw new Error('Not the same passwords.')
            }

            const hashedPassword = await bcrypt.hash(password, 10)
                await new UserRecord({
                    id: user.id,
                    username: user.username,
                    password: hashedPassword
                }).update();

            res.json({status: 'ok'})
        } catch(e){
            console.error(e.message);
        }

    })
