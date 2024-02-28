import { Request, Response } from "express";

export const register = (req: Request,res: Response) => {
    try {
        const email = req.body.email
        const password = req.body.password

        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "Password must contain between 6 and 10 characters"
            })
        }
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email) ){
          return res.status(400).json(
            {
              success: false,
              message: "format email invalid"
            }
          )
        }
        res.status(201).json ({
            success: true,
            message: "User registered succesfully"
        })
    }catch (error) {
        res.status(500).json ({
            success: false,
            message: "User cant be registered",
            error: error
        })
    }
}