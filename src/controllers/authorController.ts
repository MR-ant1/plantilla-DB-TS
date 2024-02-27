import { Request, Response } from "express"

export const getAuthors = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Author retrieved succesfully"
        }
    )
}
export const createAuthors = (req: Request, res: Response) => {
    req.body;
    res.status(201).json(
        {
            success: true,
            message: "Author created succesfully"
        }
    )
}
export const updateAuthors = (req: Request, res: Response) => {
    req.params.id;
    res.status(200).json(
        {
            success: true,
            message: "Author updated succesfully"
        }
    )
}
export const deleteAuthors = (req: Request, res: Response) => {
    req.params.id;
    res.status(200).json(
        {
            success: true,
            message: "Author deleted succesfully"
        }
    )
}
