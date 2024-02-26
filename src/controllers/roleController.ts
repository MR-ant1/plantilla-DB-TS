import { Request, Response } from "express"

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: 'Roles retrieved succesfully'
        }
    )
}
export const createRoles = (req: Request, res: Response) => {

    //recuperar info mediante body
    console.log(req.body);
    res.status(200).json(
        {
            success: true,
            message: 'Roles Created succesfully'
        }
    )
}
export const updateRoles = (req: Request, res: Response) => {

    req.params.id;
    console.log(req.params.id)

    res.status(200).json(
        {
            success: true,
            message: 'roles Updated succesfully'
        }
    )
}
export const deleteRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: 'roles deleted succesfully'
        }
    )
}