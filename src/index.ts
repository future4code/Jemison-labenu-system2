import { getAllTurmas } from './endpoints/getAllTurmas';
import { app } from './app'

app.get('/turmas', getAllTurmas)