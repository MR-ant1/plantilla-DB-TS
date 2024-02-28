import { Request, Response } from "express"

export const getLoans = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: "loan retrieved succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve loan",
            error: error
        })
    }
    res.status(200).json(
        {
            success: true,
            message: "loan retrieved succesfully"
        }
    )
}
export const createLoans = (req: Request, res: Response) => {
    try {
        req.body
        res.status(201).json(
            {
                success: true,
                message: "loan created succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create loan",
            error: error
        })
    }
    req.body
    res.status(201).json(
        {
            success: true,
            message: "loan created succesfully"
        }
    )
}
export const updateLoans = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "loan updated succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update loan",
            error: error
        })
    }
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "loan updated succesfully"
        }
    )
}
export const deleteLoans = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "loan deleted succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete loan",
            error: error
        })
    }
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "loan deleted succesfully"
        }
    )
}
