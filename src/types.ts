export enum TURMAS {
    LUA = "LUA",
    TERRA = "TERRA",
    SOL = "SOL"
}

export enum MODULOS {
    MODULO1 = "MODULO1",
    MODULO2 = "MODULO2",
    MODULO3 = "MODULO3",
    MODULO4 = "MODULO4",
    MODULO5 = "MODULO5",
    MODULO6 = "MODULO6",
    MODULO7 = "MODULO7"
}

export type Turmas = {
    id?: number,
    nome: TURMAS,
    modulo?: MODULOS,
}

export type Estudantes = {
    id?: number,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id?: number
}

export type Docentes = {
    id?: number,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id?: number
}

export type Hobbies = {
    id?: number,
    nome: string
}

export type Especialidades = {
    id?: number,
    nome: string
}

export type EstudantesHobbies = {
    id?: number,
    estudante_id: number,
    hobby_id: number
}

export type DocentesEspecialidades = {
    id?: number,
    docente_id: number,
    especialidade_id: number
}

export type DocentesTurmas = {
    id?: number,
    docente_id: number,
    turma_id: number
}

export type EstudantesTurmas = {
    id?: number,
    estudante_id: number,
    turma_id: number
}

export type DocentesEstudantes = {
    id?: number,
    docente_id: number,
    estudante_id: number
}

export type DocentesEstudantesTurmas = {
    id?: number,
    docente_id: number,
    estudante_id: number,
    turma_id: number
}

