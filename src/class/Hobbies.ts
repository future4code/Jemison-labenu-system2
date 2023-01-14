export class Hobbies {
    id?: number;
    nome: string;

    constructor (id: number, nome: string) {
        this.id = id,
        this.nome = nome
    }

    public getId(): number | undefined {
        return this.id
    }

    public getNome(): string {
        return this.nome
    }
}