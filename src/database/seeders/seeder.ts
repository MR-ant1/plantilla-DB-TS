import { AppDataSource } from "../db"
import { Role } from "../../models/Role";

const roleSeedDataBase = async () => {
    try {
        await AppDataSource.initialize();

        const roleUser = new Role()
            roleUser.name = "user"
            await roleUser.save()

            const roleAdmin = new Role()
            roleAdmin.name = "admin"
            await roleAdmin.save()

            const roleSuperAdmin = new Role()
            roleSuperAdmin.name = "super_admin"
            await roleSuperAdmin.save()
        
    } catch (error) {
       console.log(error)
    }
    finally  {await AppDataSource.destroy()}
}

roleSeedDataBase()