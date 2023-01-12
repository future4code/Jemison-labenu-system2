import { getAllTurmas } from './services/endpoints/getAllTurmas';
import { app } from './app'

app.get('/turmas', getAllTurmas)