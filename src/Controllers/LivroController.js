const {request, response} = require('express');
const Livro = require("../Models/Livro");


class LivroController {
  async index(req, res) {

    const { nome, autor, editora, ano, paginas } = req.body;

  	try {

		await Livro.create({
			nome,
			autor,
			editora,
			ano,
			paginas
		});



    	res.status(200).json({ message: 'Livro criado com sucesso!' });
	} catch (error) {
			res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }

  async showLivros (req, res) {
	try {

		const livros = await Livro.find();

		res.status(200).json({ livros });

	}catch (error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }

  async showLivrosById (req, res) {
	try {

		const { id } = req.params;

		const livro = await Livro.findById(id);

		res.status(200).json({ livro });


	}catch(error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }

  async updateLivro (req, res) {
	try {

		const { id } = req.params;

		const { nome, autor, editora, ano, paginas } = req.body;

		const livro = await Livro.findByIdAndUpdate(id, {
			nome,
			autor,
			editora,
			ano,
			paginas
		}, { new: true });

		res.status(200).json({ livro });
	}catch(error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }


  async deleteLivro (req, res) {
	try {
		
		const { id } = req.params;

		await Livro.findByIdAndDelete(id);

		res.status(200).json({ message: 'Livro deletado com sucesso!' });
	}catch(error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }
}

module.exports = new LivroController();
