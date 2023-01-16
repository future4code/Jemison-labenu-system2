import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { Usuarios } from '../class/Usuarios';

export const createEstud = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { id, nome, email, date_nasc, turma_id } = req.body;

        const newEstudante = new Usuarios(id, nome, email, date_nasc, turma_id);
        await connection('Usuarios').insert(newEstudante);

        res.status(201).send("Estudante criado com sucesso!");
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
};