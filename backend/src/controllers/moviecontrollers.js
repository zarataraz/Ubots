const filmesModel = require('../models/filmesModel');


const buscarFilmes = async(_request, response) => {
    const movies = await filmesModel.buscarFilmes();
     return response.status(200).json(movies);
};

const adicionarFilmes = async (request, response) => {
  const adicionarFilme = await filmesModel.adicionarFilmes(request.body);
   return response.status(201).json(adicionarFilme);
};

const deletaFilme = async (request, response) =>{
    const { id } = request.params;

    await filmesModel.removerFilme(id);
    return response.status(204).json()
};

const atualizaAvaliacao = async(request, response) =>{
    const { id } = request.params;
    await filmesModel.adicionaravaliacao(id, request.body);
    return response.status(204).json();

};



module.exports = {
    buscarFilmes,
    adicionarFilmes,
    deletaFilme,
    atualizaAvaliacao,
} 