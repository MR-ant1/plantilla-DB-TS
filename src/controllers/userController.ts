import { Request, Response } from "express";
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

export const createUsers = (req: Request, res: Response) => {
    try {
        req.body
        res.status(201).json(
            {
                success: true,
                message: "User created succesfully"
            }
        ) 
    } catch (error){
        res.status(500).json({
            success: false,
            message: "can't create user",
            error: error
        })
    }
}
export const updateUsers = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "User updated succesfully"
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
export const deleteUsers = (req: Request, res: Response) => {
    try {
        req.params.id
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