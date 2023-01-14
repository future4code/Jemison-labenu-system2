import { MODULOS } from "../models/Turmas";

export class Turma {
    private id?: number;
    private nome: string;
    private modulo?: MODULOS;

    constructor (id: number, nome: string, modulo?: MODULOS) {
        this.id = id;
        this.nome = nome;
        this.modulo = modulo;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getModulo(): MODULOS | undefined {
        return this.modulo;
    }
}