import { TurmasDataBase } from './../class/TurmasDataBase';
import { Request, Response, } from "express";
import { connection } from "../data/connection";
import { Turmas } from '../class/Turmas';


export const createTurma = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {  
        
        const { id, nome, modulo } = req.body;

        const newTurma = new Turmas(id, nome, modulo)
        const turmasDB = new TurmasDataBase(connection)
        turmasDB.criarTurma(newTurma)
    
        res.status(201).send("Turma criada com sucesso!")
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
} 