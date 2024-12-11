// const express = require('express');
// const { listarNoticias, mostrarNoticia } = require('../controllers/news');

// const router = express.Router();

// router.get('/', listarNoticias);
// router.get('/:id', mostrarNoticia);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { listarNoticias } = require('../controllers/news');  // Importa o controller

// Rota para listar as notícias
router.get('/', listarNoticias);

module.exports = router;
