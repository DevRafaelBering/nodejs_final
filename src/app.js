const express = require('express');
const app = express();
const transactionRoutes = require('./routes/transactionRoutes');

// Configurar o Express para lidar com JSON
app.use(express.json());

// Rotas
app.use('/api', transactionRoutes);

module.exports = app;
