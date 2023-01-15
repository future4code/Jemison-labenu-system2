export class Turmas {
    private id: number;
    private nome: string;
    private modulo: string;

    constructor (id: number, nome: string, modulo: string) {
        this.id = id;
        this.nome = nome;
        this.modulo = modulo;
    }
}