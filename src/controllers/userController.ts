import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: 'Users retrieved succesfully'
            }
        )  
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve user",
            error: error
        })
    }
    res.status(200).json(
        {
            success: true,
            message: 'Users retrieved succesfully'
        }
    )
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
    req.body
    res.status(201).json(
        {
            success: true,
            message: "User created succesfully"
        }
    )
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
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "User updated succesfully"
        }
    )
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
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "User deleted succesfully"
        }
    )
}