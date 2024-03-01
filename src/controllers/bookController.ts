import { Request, Response } from "express"

export const getBooks = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: "book retrieved succesfully"
            }
        )  
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve book",
            error: error
        })
    }
    res.status(200).json(
        {
            success: true,
            message: "book retrieved succesfully"
        }
    )
}

export const createBooks = (req: Request, res: Response) => {
    try {
        req.body
        res.status(201).json(
            {
                success: true,
                message: "book created succefully"
            }
        )   
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create book",
            error: error
        }) 
    }
}
export const updateBooks = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "book updated succefully"
            }
        )   
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update book",
            error: error
        }) 
    }
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "book updated succefully"
        }
    )
}
export const deleteBooks = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "book deleted succefully"
            }
        )   
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete book",
            error: error
        }) 
    }
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "book deleted succefully"
        }
    )
}