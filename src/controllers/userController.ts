import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
    try {
        //USAMOS EL MODELO PARA RECUPERAR LOS USUARIOS. LA PROPIEDAD FIND ARROJARÁ TODOS LOS EXISTENTES GRACIAS AL BASEENTITY
        const users = await User.find(
            {                           //MEDIANTE SELECT FILTRAMOS LA INFO DE USER QUE QUEREMOS CONSULTAR PARA, POR EJEMPLO, EVITAR MOSTRAR LA CONTRASEÑA
                select: {
                    id: true,
                    name: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true
                }
            }
        )
        res.status(200).json(
            {
                success: true,
                message: 'Users retrieved succesfully',
                data: users //introducimos data (el nombre data es lo de menos. lo importante es traer users) en la respuesta para obtener "el array" de todos los usuarios
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve users",
            error: error
        })
    }
}
export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const user = await User.findOneBy({
            id: parseInt(userId)
        })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "user retrieved",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be retrieved",
            error: error
        })
    }
}

export const getOwnUser = (req: Request, res: Response, next: NextFunction) => {

    try {
        const userId = req.params.id

        if (req.tokenData.userId !== parseInt(userId)) {
            res.status(400).json({
                success: false,
                message: "UNAUTHORIZED"
            })
        }

        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be retrieved",
            error: error
        })
    }
}

export const createUsers = (req: Request, res: Response) => {
    try {

        req.body
        res.status(201).json(
            {
                success: true,
                message: "User created succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create user",
            error: error
        })
    }
}
export const updateUsersById = async (req: Request, res: Response) => {
    try {
        //obtener user por id
        const userId = req.params.id;
        //obtener name del user por body
        const name = req.body.name;
        //validar datos
        const user = await User.findOneBy({   //RECUPERAMOS USUARIO POR ID PARA COMPROBAR SI EXISTE MEDIANTE FINDONEBY. SI NO EXISTE, ERROR 404
            id: parseInt(userId)
        })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
                data: user
            })
        }
        //tratar datos si existe el usuario en cuestión
        const userUpdated = await User.update(
            {
                id: parseInt(userId),
            },
            {
                name: name
            }
        )

        return res.status(200).json(
            {
                success: true,
                message: "User updated succesfully",
                data: userUpdated
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update user",
            error: error
        })
    }
}
export const deleteUsersById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const userToRemove = await User.findOneBy({
            id: parseInt(userId)
        })

        if (!userToRemove) {
            res.status(404).json({
                success: false,
                message: "Couldnt find user to remove"
            })
        }

        res.status(200).json(
            {
                success: true,
                message: "User deleted succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete user",
            error: error
        })
    }
}