import { getAllRelacaoDocEspe } from './endpoints/getAllRelacaoDocEspe';
import { app } from './app'
import { getAllTurmas } from './endpoints/getAllTurmas';
import { createTurma } from './endpoints/createTurma';
import { getEstudNome } from './endpoints/getEstudNome';
import { getAllEstudantes } from './endpoints/getAllEstudantes';
import { getAllDocentes } from './endpoints/getAllDocentes';
import { getDocenteNome } from './endpoints/getDocenteNome'
import { putModuloTurma } from './endpoints/putModuloTurma';
import { putEstudTurmas } from './endpoints/putEstudTurma';
import { createEstud } from './endpoints/createEstud';

app.get("/allrelacaodocespe", getAllRelacaoDocEspe)

app.get("/turmas", getAllTurmas)

app.post("/turmas", createTurma)

app.get("/estudantes/:nome", getEstudNome)

app.get("/estudantes", getAllEstudantes)

app.get("/docentes", getAllDocentes)

app.get("/docentes/:nome", getDocenteNome)

app.put("/turmas/:id", putModuloTurma)

app.put("/estudantes/:id", putEstudTurmas)

app.post("/estudantes", createEstud)