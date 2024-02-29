import { Request, Response } from "express";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
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
export const login = async (req: Request, res: Response) => {
    try {
        //recuperar info login user
        const email = req.body.email
        const password = req.body.password

        //validacion de email y password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "email and password are needed"
            })
        }
        //To do: validar formato email

        const user: any = await User.findOne(           //CAMBIAR FIND ONE BY'S POR FIND ONE A SECAS
            {
                where: {
                    email: email
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    role: {
                        id: true,
                        name: true
                    }
                }
            }
        )
        
        if (!user) {
            res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if(!isValidPassword) {
            return res.status(400).json ({
                success: false,
                message: "Email or password invalid"
            })
        }

        //CREAR TOKEN
        const token = jwt.sign(
            {
                userId: user.id,
                roleName: user.role.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h"
            }
        )
        
        res.status(200).json({
            success: true,
            message: "User logged succesfully",
            token: token
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        })
    }
}
