export enum MODULOS {
    MODULO1 = "MODULO1",
    MODULO2 = "MODULO2",
    MODULO3 = "MODULO3",
    MODULO4 = "MODULO4",
    MODULO5 = "MODULO5",
    MODULO6 = "MODULO6",
    MODULO7 = "MODULO7"
}


export type Turmas_data = {
    id?: number,
    nome: string,
    modulo?: MODULOS,
}