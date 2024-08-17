const app = require('./app');
const connectDB = require('../src/infra/database/mongodb.js');

// Conectar ao MongoDB
connectDB();

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
