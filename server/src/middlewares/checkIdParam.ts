import type {NextFunction, Request, Response} from "express";


export const checkIdParam = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    if (id !== parseInt(id)){
        return res.status(400).json({msg: "l'id n est pas un entier valide"});
    }
    next();
}