import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { TokenData } from "../types";

export const auth = async (req: Request,res: Response, next: NextFunction) => {

    try {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            success: false,
            message: "UNAUTHORIZED"
        })
    }
        //verificar que el jwt es propio de la aplicacion con el token + secreto y ademas verify tambien devuelve los datos del token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )
        console.log(decoded)

        req.tokenData = decoded as TokenData 

        next();

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "JWT NOT VALID OR MALFORMED",
            error: error
        })
    }
}