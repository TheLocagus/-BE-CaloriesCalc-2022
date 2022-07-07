import {NextFunction, Request, Response} from "express";

interface ErrorInfo {
    status?: number;
    message: string;
}

type ErrorHandler = Error & ErrorInfo;

export const createError = (status: number, message: string) => {
    const err: ErrorHandler = new Error();
    err.status = status
    err.message = message
    return err
}

export const errorHandle = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    // console.log(err)
    console.log(err.message)
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    })
}