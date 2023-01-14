export class Usuario{
    private id?: number;
    private nome: string;
    private email: string;
    private data_nasc: string;
    private turma_id?: number;

    constructor ( id: number, nome: string, email: string, data_nasc: string, turma_id?: number  )
    {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
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
        return this.data_nasc;
    }

    public getTurma_id(): number | undefined {
        return this.turma_id;
    }
}
