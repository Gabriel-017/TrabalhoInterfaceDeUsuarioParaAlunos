const express = require('express');
const bodyParser = require('body-parser');
const alunosController = require('./controllers/alunos');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/alunos');
});

app.get('/alunos', alunosController.listar);
app.get('/aluno/:RA', alunosController.exibir);
app.post('/aluno', alunosController.cadastrar);
app.put('/aluno/:RA', alunosController.editar);
app.delete('/aluno/:RA', alunosController.excluir);


app.get('/aluno/:RA/editar', alunosController.editarForm);


app.get('/aluno/:RA/excluir', alunosController.exibirFormExclusao); 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});