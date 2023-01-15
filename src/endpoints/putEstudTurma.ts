import { Request, Response } from "express";
import { connection } from "../data/connection";
import { UsuariosDataBase } from '../class/UsuariosDataBase';

export const putEstudTurmas = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        
        const id = Number(req.params.id);
        const turma_id = Number(req.body.turma_id);

        const estudante = new UsuariosDataBase(connection);

        await estudante.mudarTurmaEstudante(id, turma_id);

        res.status(200).send({message: "Turma do estudante alterada com sucesso!"});

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
}