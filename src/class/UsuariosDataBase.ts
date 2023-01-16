import { Knex } from "knex";
import { Usuarios } from "./Usuarios";

export class UsuariosDataBase {
  constructor(private connection: Knex) {
    this.connection = connection;
  }

  public criarDocente = async (newDocente: Usuarios) => {
    await this.connection("Docentes").insert(newDocente);
  };

  public criarEstudante = async (newEstudante: Usuarios) => {
    const usuarios = await this.connection("Estudantes").insert(newEstudante);
    return usuarios;
  };

  public buscarDocentes = async () => {
    const usuario = await this.connection("Docentes").select();
    return usuario;
  };

  public buscarEstudantes = async () => {
    const usuario = await this.connection("Estudantes").select();
    return usuario;
  };

  public buscarEstudanteNome = async (nome: string) => {
    const usuarios = await this.connection("Estudantes")
    .select("id", "nome")
    .where("nome", "like", `%${nome}%`)
    return usuarios;
  };

  public buscarDocente = async (id: number) => {
    const usuarios = await this.connection("Docentes").select("id", "nome");
    return usuarios;
  };

  public buscarDocenteNome = async (nome: string) => {
    const usuarios = await this.connection("Docentes")
    .select("id", "nome")
    .where("nome", "like", `%${nome}%`);
    return usuarios;
  };

  public mudarTurmaEstudante = async (id: number, turma_id: number) => {
    const estudante = await this.connection('Estudantes')
    .update({turma_id})
    .where({id: id});
    return estudante;
}
  
}