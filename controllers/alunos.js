const axios = require('axios');

class AlunosController {
  async listar(req, res) {
    try {
      const response = await axios.get('https://api-alunos-fatec.vercel.app/alunos');
      const alunos = response.data;
      res.render('alunos/listar', { alunos });
    } catch (error) {
      res.render('error', { error });
    }
  }

  async exibir(req, res) {
    const { RA } = req.params;
    try {
      const response = await axios.get(`https://api-alunos-fatec.vercel.app/aluno/${RA}`);
      const aluno = response.data;
      res.render('alunos/exibir', { aluno });
    } catch (error) {
      res.render('error', { error });
    }
  }

  async cadastrar(req, res) {
    const { RA, nome, dataNascimento } = req.body;
    try {
      await axios.post('https://api-alunos-fatec.vercel.app/aluno', { RA, nome, dataNascimento });
      res.render('alunos/sucesso');
    } catch (error) {
      res.render('error', { error });
    }
  }

  async editar(req, res) {
    const { RA } = req.params;
    const { nome, dataNascimento } = req.body;
    try {
      await axios.put(`https://api-alunos-fatec.vercel.app/aluno/${RA}`, { nome, dataNascimento });
      res.render('alunos/sucesso');
    } catch (error) {
      res.render('error', { error });
    }
  }

  async excluir(req, res) {
    const { RA } = req.params;
    try {
      await axios.delete(`https://api-alunos-fatec.vercel.app/aluno/${RA}`);
      res.render('alunos/sucesso');
    } catch (error) {
      res.render('error', { error });
    }
  }

  async editarForm(req, res) { // Adicionando o método para renderizar o formulário de edição
    const { RA } = req.params;
    try {
      const response = await axios.get(`https://api-alunos-fatec.vercel.app/aluno/${RA}`);
      const aluno = response.data;
      res.render('alunos/editar', { aluno }); // Substitua 'editar' pelo nome do arquivo de visualização do formulário de edição
    } catch (error) {
      res.render('error', { error });
    }
  }

  async exibirFormExclusao(req, res) { // Adicionando o método para renderizar o formulário de exclusão
    const { RA } = req.params;
    try {
      const response = await axios.get(`https://api-alunos-fatec.vercel.app/aluno/${RA}`);
      const aluno = response.data;
      res.render('alunos/excluir', { aluno }); // Substitua 'excluir' pelo nome do arquivo de visualização do formulário de exclusão
    } catch (error) {
      res.render('error', { error });
    }
  }
}

module.exports = new AlunosController();
