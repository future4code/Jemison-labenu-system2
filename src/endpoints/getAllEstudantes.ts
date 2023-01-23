import { Request, Response } from "express";
import { UsuariosDataBase } from "../class/UsuariosDataBase";
import { connection } from "../data/connection";

export const getAllEstudantes = async ( req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const estudantes = new UsuariosDataBase(connection);

        const result = await estudantes.buscarEstudantes()

        res.status(200).send({estudantes: result})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}