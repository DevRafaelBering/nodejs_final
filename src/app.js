const express = require('express');
const app = express();
const transactionRoutes = require('./routes/transactionRoutes');

app.use(express.json());
app.use(transactionRoutes);

module.exports = app;
