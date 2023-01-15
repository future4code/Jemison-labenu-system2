import { Request, Response } from "express";
import { DocentesEspecialidadesDataBase } from "../class/DocentesEspecialidadesDataBase";
import { connection } from "../data/connection";


export const getAllRelacaoDocEspe = async (req: Request, res: Response) => {
    let errorCode : number = 400;
    try {
        const docentesEspecialidadesDataBase = new DocentesEspecialidadesDataBase(connection);
        const result = await docentesEspecialidadesDataBase.getAllRelation();
        res.status(200).send(result);

    } catch (errorCode) {
        res.status(400).send({
            "message": "Error inesperado"
        });
    }
}