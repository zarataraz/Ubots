const express = require('express');

const router = express.Router();

const moviecontrollers = require('../controlers/moviecontrollers');
const tratativasDeRntrada = require('../middlewares/tratativasDeEntrada');


router.get('/movies', moviecontrollers.buscarFilmes);
router.post('/movies', tratativasDeRntrada.validacaoTitle, tratativasDeRntrada.validacaoAvaliacao, tratativasDeRntrada.validacaoTitleAvaliacao,  moviecontrollers.adicionarFilmes);
router.delete('/movies/:id', moviecontrollers.deletaFilme);
router.put('/movies/:id', tratativasDeRntrada.validacaoAtualizacaoAvaliacao, moviecontrollers.atualizaAvaliacao);


module.exports = router;