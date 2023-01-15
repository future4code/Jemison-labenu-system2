import { connection } from './../data/connection';
import { Knex } from 'knex';
import { Turmas } from './Turmas';


export class TurmasDataBase {
    constructor (private connection: Knex) {
        this.connection = connection;
    }

    public criarTurma = async (newTurma: Turmas) => {
        await this.connection('Turmas').insert(newTurma);
    }

    public buscarTurma = async () => {
        const turma = await this.connection('Turmas').select();
        return turma;
    }

    public buscarTurmas = async (id:number) => {
        const turmas = await this.connection('Turmas').select('id', 'nome');
        return turmas;
    }

    public mudarModuloTurma = async (id: number, modulo: string) => {
        const turma = await this.connection('Turmas')
        .update({modulo: modulo})
        .where({id: id});
        return turma;
    }

}