export class EstudantesHobbies {
    id?: number;
    estudante_id: number;
    hobby_id: number;

    constructor (id: number, estudante_id: number, hobby_id: number) {
        this.id = id;
        this.estudante_id = estudante_id;
        this.hobby_id = hobby_id;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getEstudante_id(): number {
        return this.estudante_id;
    }

    public getHobby_id(): number {
        return this.hobby_id;
    }
}