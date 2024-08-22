// class Animal {
// 	constructor(nome, raca, especie, idade, peso, cor, dono) {
// 		this.nome = nome;
// 		this.raca = raca;
// 		this.especie = especie;
//         this.idade = idade;
//         this.peso = peso;
//         this.cor = cor;
//         this.dono = dono;
// 		this.dataDeCriacao = new Date();
// 	}

	
// }

// // export default Animal
// module.exports = Animal;
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database.config');

const Animal = sequelize.define('Animal', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dono: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Animal;