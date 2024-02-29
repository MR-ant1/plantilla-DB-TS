export type TokenData = {
    userId: number;
    roleName: string;
};

//En este archivo incluimos DENTRO DEL REQUEST, LA PROPIEDAD TOKENDATA, QUE SE COMPONE DE USERID Y ROLENAME

declare global {
    // Express
    namespace Express {
        export interface Request {
            tokenData: TokenData;
        }
    }
}