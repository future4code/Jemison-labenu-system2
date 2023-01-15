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
}