import { Request, Response } from "express";
import { TurmasDataBase } from "../class/TurmasDataBase";
import { connection } from "../data/connection";

export const putModuloTurma = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        
        const id = Number(req.params.id);
        const modulo = req.body.modulo;

        const turma = new TurmasDataBase(connection);

        await turma.mudarModuloTurma(id, modulo);

        res.status(200).send({message: "Modulo da turma alterado com sucesso!"});

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
}