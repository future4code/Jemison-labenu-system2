import { Knex } from 'knex';
import { DocentesEspecialidades } from './DocentesEspecialidades';


export class DocentesEspecialidadesDataBase {
    constructor (private connection: Knex) {
        this.connection = connection;
    }

    public insertRalation = async (newRelacao: DocentesEspecialidades) => {
        await this.connection("Docente_Especialidade").insert(newRelacao);
    }

    public getRelationById = async (docente_id: number) => {
        const result = await this.connection("Docente_Especialidade").select().where({ docente_id });
        return result;
    }

    public getAllRelation = async () => {
        const result = await this.connection("Docente_Especialidade").select("*");
        return result;
    }

} 
