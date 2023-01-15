const enum MODULOS {
    MODULO1 = "MODULO1",
    MODULO2 = "MODULO2",
    MODULO3 = "MODULO3",
    MODULO4 = "MODULO4",
    MODULO5 = "MODULO5",
    MODULO6 = "MODULO6",
    MODULO7 = "MODULO7"
}
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