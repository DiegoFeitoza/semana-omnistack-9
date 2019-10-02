const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const app = express();

//GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.body = Acessar corpo da requisição (para criação e edição)
//req.params = Acessar route params (para edição e delete)

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-4eb0q.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);