import { Request, Response } from "express"

export const getAuthors = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: "Author retrieved succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve author",
            error: error
        })
    }
    res.status(200).json(
        {
            success: true,
            message: "Author retrieved succesfully"
        }
    )
}
export const createAuthors = (req: Request, res: Response) => {
    try {
        req.body;
        res.status(201).json(
            {
                success: true,
                message: "Author created succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create author",
            error: error
        })
    }
    req.body;
    res.status(201).json(
        {
            success: true,
            message: "Author created succesfully"
        }
    )
}
export const updateAuthors = (req: Request, res: Response) => {
    try {
        req.params.id;
        res.status(200).json(
            {
                success: true,
                message: "Author updated succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update author",
            error: error
        })
    }
    req.params.id;
    res.status(200).json(
        {
            success: true,
            message: "Author updated succesfully"
        }
    )
}
export const deleteAuthors = (req: Request, res: Response) => {
    try {
        req.params.id;
        res.status(200).json(
            {
                success: true,
                message: "Author deleted succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete author",
            error: error
        })
    }
    req.params.id;
    res.status(200).json(
        {
            success: true,
            message: "Author deleted succesfully"
        }
    )
}
