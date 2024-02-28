import { Request, Response } from "express"

export const getFavouriteBooks = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: "favourite book retrieved succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve favourite book",
            error: error
        })
    }
    res.status(200).json(
        {
            success: true,
            message: "favourite book retrieved succesfully"
        }
    )
}
export const createFavouriteBooks = (req: Request, res: Response) => {
    try {
        req.body
        res.status(201).json(
            {
                success: true,
                message: "favourite book created succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create favourite book",
            error: error
        })
    }
    req.body
    res.status(201).json(
        {
            success: true,
            message: "favourite book created succesfully"
        }
    )
}
export const updateFavouriteBooks = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "favourite book updated succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update favourite book",
            error: error
        })
    }
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "favourite book updated succesfully"
        }
    )
}
export const deleteFavouriteBooks = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "favourite book deleted succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete favourite book",
            error: error
        })
    }
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "favourite book deleted succesfully"
        }
    )
}