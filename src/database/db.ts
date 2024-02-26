import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { Roles1708945319315 } from "./migrations/1708945319315-roles";
import { Users1708948584715 } from "./migrations/1708948584715-users";
import { Authors1708949619955 } from "./migrations/1708949619955-authors";
import { Books1708950081474 } from "./migrations/1708950081474-books";
import { FavouriteBook1708950865819 } from "./migrations/1708950865819-favourite_book";
import { Loans1708951194654 } from "./migrations/1708951194654-loans";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [Roles1708945319315, Users1708948584715, Authors1708949619955, Books1708950081474, FavouriteBook1708950865819, Loans1708951194654],
    synchronize: false,
    logging: false,
})