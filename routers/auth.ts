import express from 'express';
import {UserRecord} from "../records/user.record";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from "../utils/JWT_SECRET";
import {LoggedUserEntity, UserEntity} from "../types";
import {createError} from "../utils/error";
import {FavouriteMealRecord} from "../records/favourite-meal.record";
import {convertDatabaseDatasToFrontEndDatas} from "../utils/convertDatabaseDatasToFrontEndDatas";

export const authRouter = express.Router();

authRouter
    .post('/login', async (req, res, next) => {
        const {username, password} = req.body;
        const user = await UserRecord.findByUsername(username);

        try {
            if (user === null) {
                return next(createError(403, 'Invalid username or password.'))
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) return next(createError(403, 'Invalid username or password.'))

            const loggedUser: LoggedUserEntity = {
                id: user.id,
                username,
                //@TODO Changing after adding table with more details in db.
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    username,
                },
                JWT_SECRET
            )

            res.cookie('access_token', token, {
                httpOnly: true,
            }).status(200).json({status: 'ok', loggedUser})
        } catch (e) {
            next(e)
        }
    })

    .post('/registry', async (req, res, next) => {
        const {username, password} = req.body;

        try {
            const isAlreadySameUser = await UserRecord.findByUsername(username) !== null;

            if (isAlreadySameUser) return next(createError(403, 'User with this username already exists.'))

            if (password.length < 5) return next(createError(403, 'Password should have at least 5 characters.'))

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser: UserEntity = {
                username,
                password: hashedPassword,
            };

            await new UserRecord(newUser).create();

            res.json({
                username,
                status: 'ok',
            })
        } catch (err) {
            console.error(err.message)
        }

    })
    .get('/logout', async (req, res, next) => {
        try {
            res.clearCookie('access_token')
            res.status(200).json({
                success: true,
            })
        } catch(e){
            next(e)
        }
    })