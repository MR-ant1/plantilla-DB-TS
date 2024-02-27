import { Request, Response } from "express"

export const getBooks = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "book retrieved succesfully"
        }
    )
}

export const createBooks = (req: Request, res: Response) => {
    req.body
    res.status(201).json(
        {
            success: true,
            message: "book created succefully"
        }
    )
}
export const updateBooks = (req: Request, res: Response) => {
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "book updated succefully"
        }
    )
}
export const deleteBooks = (req: Request, res: Response) => {
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "book deleted succefully"
        }
    )
}