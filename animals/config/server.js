const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const animalRoutes = require('../src/routers/animal.routers.js');
const sequelize = require('./database.config.js');
const Animal = require('../src/model/animals.model.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(animalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });