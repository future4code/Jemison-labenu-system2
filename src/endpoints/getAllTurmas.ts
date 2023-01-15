import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Turmas } from "../../models/types"


export const getAllTurmas = async (req: Request, res: Response): Promise<void> =>{
    let errorCode: number = 400
    try {
        const result: Turmas[] = await connection("Turmas")
        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode)
    }
}
