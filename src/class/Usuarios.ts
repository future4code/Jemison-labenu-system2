export class Usuarios {
    mudarTurmaEstudante(id: number, turma_id: any) {
        throw new Error('Method not implemented.');
    }
    private id?: number;
    private nome: string;
    private email: string;
    private date_nasc: string;
    private turma_id?: number;

    constructor ( id: number, nome: string, email: string, date_nasc: string, turma_id?: number  )
    {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.date_nasc = date_nasc;
        this.turma_id = turma_id;
    }

    public getid(): number | undefined {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public getData_nasc(): string {
        return this.date_nasc;
    }

    public getTurma_id(): number | undefined {
        return this.turma_id;
    }
}
