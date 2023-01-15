import { getAllRelacaoDocEspe } from './endpoints/getAllRelacaoDocEspe';
import { app } from './app'
import { getAllTurmas } from './endpoints/getAllTurmas';
import { createTurma } from './endpoints/createTurma';

app.get("/allrelacaodocespe", getAllRelacaoDocEspe)

app.get("/turmas", getAllTurmas)

app.post("/turmas", createTurma)