import { Request, Response } from "express"
import { Role } from "../models/Role";

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: 'Roles retrieved succesfully'
        }
    )
}
export const createRoles = async(req: Request, res: Response) => {
try {
    console.log(req.body);
    //HAY QUE GUARDAREN DB.TS LAS ENTITIES (MODELS) PARA QUE FUNCIONEN
    //guardamos el texto introducido en la variable name
    const name = req.body.name;
    
    //VALIDAMOS que el nombre introducido cumpla la condición de longitud<50
    if (name.length > 50) {
        return res.status(400).json({   //si supera los 50 caracteres, RETORNAMOS error y cortamos ahi la función
            success: false,
            message: "Role name must be under 50 characters"
        })
    }
    // ALMACENAMOS la data proporcionada en el body
    const newRole = await Role.create({
        name: name
    }).save()

    res.status(201).json(
        {
            success: true,
            message: 'Roles Created succesfully',
            data: newRole
        }
    )
} catch (error) {
    res.status(500).json ({
        success: false,
        message: "can't create role",
        error: error
    })
}
    //recuperar info mediante body
    console.log(req.body);
    //HAY QUE GUARDAREN DB.TS LAS ENTITIES (MODELS) PARA QUE FUNCIONEN
    //guardamos el texto introducido en la variable name
    const name = req.body.name;
    
    //VALIDAMOS que el nombre introducido cumpla la condición de longitud<50
    if (name.length > 50) {
        return res.status(400).json({   //si supera los 50 caracteres, RETORNAMOS error y cortamos ahi la función
            success: false,
            message: "Role name must be under 50 characters"
        })
    }

    const newRole = await Role.create({
        name: name
    }).save()

    res.status(201).json(
        {
            success: true,
            message: 'Roles Created succesfully',
            data: newRole
        }
    )
}
export const updateRoles = (req: Request, res: Response) => {

    //pedir id de rol en este caso para actuar SOBRE ESE
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

    req.params.id;
    console.log(req.params.id)

    res.status(200).json(
        {
            success: true,
            message: 'roles deleted succesfully'
        }
    )
}