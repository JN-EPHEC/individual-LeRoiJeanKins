import type {NextFunction, Request, Response} from "express";

export const errorHandler = (err : any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const status = err.status || 500;
    const msg = err.message || "error del servidor";
    next();
}