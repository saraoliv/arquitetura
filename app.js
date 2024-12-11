const express = require('express');
const noticiasRoutes = require('./src/routes/news');
const app = express();

// Defina o motor de visualização (EJS)
app.set('view engine', 'ejs');

// Aponte para o diretório correto das views (src/views)
app.set('views', './src/views');  

// Middleware estático (se necessário para arquivos como imagens, CSS)
app.use(express.static('public'));

// Rota principal
app.use('/', noticiasRoutes);

// Inicia o servidor na porta 5500
app.listen(5500, () => console.log(`Servidor rodando em http://localhost:5500`));
