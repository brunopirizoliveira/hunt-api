// FRAMEWORK DE APLICATIVO WEB
const express  = require('express');

// ORM DO BD
const mongoose = require('mongoose');

// Auto import
const requireDir = require('require-dir');

// CORS
const cors = require('cors');

// Iniciando o app
const app = express();
      app.use(express.json());
      app.use(cors());

// Inciaindo o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);