export class DocentesEspecialidades {
    private id?: number | undefined;
    private docente_id: number;
    private especialidade_id: number;

    constructor (id: number, docente_id: number, especialidade_id: number){
        this.id = id;
        this.docente_id = docente_id;
        this.especialidade_id = especialidade_id;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getDocente_id(): number {
        return this.docente_id;
    }

    public getEspecialidade_id(): number {
        return this.especialidade_id;
    }
}