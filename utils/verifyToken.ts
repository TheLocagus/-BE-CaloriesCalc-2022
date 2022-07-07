import jwt, {JwtPayload, VerifyErrors} from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
import {createError} from "./error";
import {JWT_SECRET} from "./JWT_SECRET";

interface UserData {
    user?: JwtPayload
}

type RequestType = Request & UserData;

export const verifyTokenAndUserWithParams = (req: RequestType, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, JWT_SECRET, (err: VerifyErrors, user: JwtPayload) => {
        if(err) {
            return next(createError(403, "Token is not valid!"));
        }
        req.user = user;

        if(req.user.id === req.params.id){
            next()
        } else {
            return next(createError(403, "You are not authorized"));
        }
    })
}

export const verifyTokenAndUserWithBody = (req: RequestType, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, JWT_SECRET, (err: VerifyErrors, user: JwtPayload) => {
        if(err) {
            return next(createError(403, "Token is not valid!"));
        }
        req.user = user;

        if(req.user.id === req.body.userId){
            next()
        } else {
            return next(createError(403, "You are not authorized"));
        }
    })
}

// export const verifyUserWithParams = (req: RequestType, res: Response, next: NextFunction) => {
//     verifyToken(req, res, next,  () => {
//         console.log(req.user)
//         console.log(req.params)
//
//     })
// }

// export const verifyUserWithBody = (req: RequestType, res: Response, next: NextFunction) => {
//     verifyToken(req, res, next, () => {
//         if(req.user._id === req.body.data.userId){
//             next()
//         } else {
//             return next(createError(403, "You are not authorized"));
//         }
//     })
// }