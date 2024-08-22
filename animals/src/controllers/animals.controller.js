const Animal = require('../model/animals.model.js');

class AnimalController {
  static async cadastrar(req, res) {
    const { nome, raca, especie, idade, peso, cor, dono } = req.body;
    try {
      await Animal.create({ nome, raca, especie, idade, peso, cor, dono });
      res.status(200).json({ message: 'Animal cadastrado com sucesso' });
    } catch (error) {
      console.error('Erro ao cadastrar animal:', error);
      res.status(500).json({ message: 'Erro ao cadastrar animal' });
    }
  }

  static async listar(req, res) {
    try {
      const animais = await Animal.findAll();
      res.render('listagem', { animais });
    } catch (error) {
      console.error('Erro ao listar animais:', error);
      res.status(500).send('Erro ao listar animais');
    }
  }
}

module.exports = AnimalController;