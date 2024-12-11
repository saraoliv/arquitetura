// const { getNoticias, getNoticiaById } = require("../models/news");

// const listarNoticias = (req, res) => {
//   const todasNoticias = getNoticias();
//   res.render("index", { noticias: todasNoticias });
// };

// const mostrarNoticia = (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const noticia = getNoticiaById(id);
//   if (noticia) {
//     res.render("index", { noticias: [noticia] });
//   } else {
//     res.status(404).send("Notícia não encontrada");
//   }
// };

// module.exports = { listarNoticias, mostrarNoticia };

const fs = require("fs");
const path = require("path");

// Função para listar as notícias
const listarNoticias = (req, res) => {
  const noticias = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../data/noticias.json"))
  );
  res.render("news/index", { noticias }); // Renderiza a view 'index' dentro da pasta 'news'
};

module.exports = {
  listarNoticias,
};
