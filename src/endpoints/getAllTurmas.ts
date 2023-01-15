import { TurmasDataBase } from './../class/TurmasDataBase';
import { Request, Response } from "express";
import { connection } from "../data/connection";


export const getAllTurmas = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const turmas = new TurmasDataBase(connection);

        const result = await turmas.buscarTurma()

        res.status(200).send({turmas: result});
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message});
    }
}
