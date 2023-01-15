import { Knex } from 'knex';
import { DocentesEspecialidades } from './DocentesEspecialidades';


export class DocentesEspecialidadesDataBase {
    constructor (private connection: Knex) {
        this.connection = connection;
    }

    public insertRalation = async (newRelacao: DocentesEspecialidades) => {
        await this.connection("Docente_Especialidade").insert(newRelacao);
    }

    public getRelationById = async (id: string): Promise<void> => {
        const result = await this.connection("Docente_Especialidade").select("*").where({ id });
        return result[0];
    }

    public getAllRelation = async (id: string): Promise<void> => {
        const result = await this.connection("Docente_Especialidade").select("*");
        return result[0];
    }

}
