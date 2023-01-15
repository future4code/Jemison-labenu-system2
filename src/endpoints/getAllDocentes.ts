import { Request, Response } from "express";
import { UsuariosDataBase } from "../class/UsuariosDataBase";
import { connection } from "../data/connection";

export const getAllDocentes = async ( req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const docentes = new UsuariosDataBase(connection);

        const result = await docentes.buscarDocentes()

        res.status(200).send({docentes: result})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}