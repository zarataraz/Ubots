const connection = require('./conection')

const buscarFilmes =async () => {
    const [movie] = await connection.execute('SELECT * FROM movie');
    return movie;
};

const adicionarFilmes = async (admovie) => {
    const { title, avaliacao } = admovie;
    const query = 'INSERT INTO  movie(title, avaliacao) VALUES (?, ?)';
    const [adicionarFilme] = await connection.execute(query, [title,  avaliacao]);
    return {insertId: adicionarFilme.insertId};
};

const removerFilme = async(id) => {
    const removeFilme = await connection.execute('DELETE FROM movie WHERE id_movies = ?', [id]);
    return removeFilme;
};
const adicionaravaliacao = async(id, movie) => {
    const{avaliacao} = movie;
    const query = 'UPDATE movie SET avaliacao = ? WHERE id_movies = ?';

    const adicionaAvaliacao = await connection.execute(query, [avaliacao, id]);
    return adicionaAvaliacao;
};

module.exports = {
    buscarFilmes,
    adicionarFilmes,
    removerFilme,
    adicionaravaliacao,
};