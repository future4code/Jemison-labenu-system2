import { Request, Response } from "express";
import { UsuariosDataBase } from "../class/UsuariosDataBase";
import { connection } from "../data/connection";



export const getDocenteNome = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const nome = new UsuariosDataBase(connection);
        
        const result = await nome.buscarDocenteNome(req.params.nome)
        
        res.status(200).send(result);

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
}
