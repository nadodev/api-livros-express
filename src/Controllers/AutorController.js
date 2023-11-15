const {request, response} = require('express');
const {Autor} = require("../Models/Autor");


class AutorController {
  async indexAutor(req, res) {

    const { nome, nacionalidade } = req.body;

  	try {

		await Autor.create({
			nome,
			nacionalidade,
		});



    	res.status(200).json({ message: 'Livro criado com sucesso!' });
	} catch (error) {
			res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }

  async showAutor (req, res) {
	try {

		const autor = await Autor.find();

		res.status(200).json({ autor });

	}catch (error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }

  async showAutorById (req, res) {
	try {

		const { id } = req.params;

		const autor = await Autor.findById(id);

		res.status(200).json({ autor });


	}catch(error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }

  async updateAutor (req, res) {
	try {

		const { id } = req.params;

		const { nome, nacionalidade } = req.body;

		const autor = await Autor.findByIdAndUpdate(id, {
			nome,
			nacionalidade,
		}, { new: true });

		res.status(200).json({ autor });
	}catch(error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }


  async deleteAutor (req, res) {
	try {
		
		const { id } = req.params;

		await Autor.findByIdAndDelete(id);

		res.status(200).json({ message: 'Autor deletado com sucesso!' });
	}catch(error) {
		res.status(500).json({ error: 'Erro ao processar a requisição', message: error.message });
	}
  }
}

module.exports = new AutorController();
