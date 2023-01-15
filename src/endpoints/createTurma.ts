import { TurmasDataBase } from './../class/TurmasDataBase';
import { Request, Response, } from "express";
import { connection } from "../data/connection";
import { Turmas } from '../class/Turmas';


export const createTurma = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.body.id;
        const nome = req.body.nome;
        const modulo = req.body.modulo;

        if (!nome) {
            errorCode = 422;
            throw new Error("Body inválido!");
        }
        const newTurma = new Turmas(id, nome, modulo)
        const turmasDB = new TurmasDataBase(connection)
        turmasDB.criarTurma(newTurma)
    
        res.status(201).send("Turma criada com sucesso!")
    } catch (error) {
        res.status(errorCode).send("Erro inesperado")
    }
} 