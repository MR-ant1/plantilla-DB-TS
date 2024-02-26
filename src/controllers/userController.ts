import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: 'Users retrieved succesfully'
        }
    )
}

export const createUser = (req: Request, res: Response) => {
    res.status(201).json(
        {
            success: true,
            message: "User created succesfully"
        }
    )
}
export const updateUser = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "User updated succesfully"
        }
    )
}
export const deleteUser = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "User deleted succesfully"
        }
    )
}