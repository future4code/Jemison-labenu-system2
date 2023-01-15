import { getAllRelacaoDocEspe } from './endpoints/getAllRelacaoDocEspe';
import { app } from './app'
import { getAllTurmas } from './endpoints/getAllTurmas';
import { createTurma } from './endpoints/createTurma';
import { getEstudNome } from './endpoints/getEstudNome';
import { getAllEstudantes } from './endpoints/getAllEstudantes';

app.get("/allrelacaodocespe", getAllRelacaoDocEspe)

app.get("/turmas", getAllTurmas)

app.post("/turmas", createTurma)

app.get("/estudantes/:nome", getEstudNome)

app.get("/estudantes", getAllEstudantes)