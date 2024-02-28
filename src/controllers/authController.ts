import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
    try {
        //1 validamos informacion
        console.log(req.body)
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name

        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "Password must contain between 6 and 10 characters"
            })
        }


        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        //2 tratamos la información si procede
        //INSTALAMOS DEPENDENCIA BCRYPT PARA ENCRIPTAR CONTRASEÑAS
        const passwordEncrypted = bcrypt.hashSync(password, 8) //el 8 es para el saltround. NUMERO DE VUELTAS DE ENCRIPTACION QUE DARÁ
        //comprobar que se genera correctamente el chorizo
        console.log(passwordEncrypted);

        //3 GUARDAMOS INFORMACION EN DB
        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordEncrypted,
            role: { id: 1 },
        }).save()
        res.status(201).json({
            success: true,
            message: "User registered succesfully",
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be registered",
            error: error
        })
    }
}