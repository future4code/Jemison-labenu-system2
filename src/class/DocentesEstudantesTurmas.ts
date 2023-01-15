export class DocentesEstudantesTurmas {
    private id: number | undefined;
    private docente_id: number;
    private estudante_id: number;
    private turma_id: number;

    constructor (id: number, docente_id: number, estudante_id: number, turma_id: number){
        this.id = id;
        this.docente_id = docente_id;
        this.estudante_id = estudante_id;
        this.turma_id = turma_id;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getDocente_id(): number {
        return this.docente_id;
    }

    public getEstudante_id(): number {
        return this.estudante_id;
    }
}