const noticias = require("../../data/noticias.json");

const getNoticias = () => noticias;

const getNoticiaById = (id) => noticias.find((noticia) => noticia.id === id);

module.exports = { getNoticias, getNoticiaById };