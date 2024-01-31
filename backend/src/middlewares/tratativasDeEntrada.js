const validacaoTitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        return response.status(400).json({ message: 'o campo "title" é obrigatório' });
    }

    if (body.title == '') {
        return response.status(400).json({ message: 'o campo "title" não pode ser vazio' });
    }

    next();
};

const validacaoAvaliacao = (request, response, next) => {
    const { body } = request;


    if (body.avaliacao == undefined) {
        body.avaliacao = null
        next();
    };
    if (body.avaliacao == '') {
        body.avaliacao = null
        next();
    };
    if (body.avaliacao < 0) {
        return response.status(400).json({ message: 'o campo "avaliacao" não pode ser menor que 0' });
    }
    if (body.avaliacao > 10) {
        return response.status(400).json({ message: 'o campo "avaliacao" não pode ser maior que 10' });

    next();

}
}



const validacaoTitleAvaliacao = (request, response, next) => {
    const { body } = request;
    const camposPermitidos = ['title', 'avaliacao'];
    const camposRecebidos = Object.keys(body);
    const camposInvalidos = camposRecebidos.filter(campo => !camposPermitidos.includes(campo));

    if (camposInvalidos.length > 0) {
        return response.status(400).json({ message: `favor entrar apenas com os campos title e avaliacao. Campos inválidos: ${camposInvalidos.join(', ')}` });
    }

    next();
};
const validacaoAtualizacaoAvaliacao = (request, response, next) => {
    const { body } = request;
    const camposPermitidos = ['avaliacao'];
    const camposRecebidos = Object.keys(body);
    const camposInvalidos = camposRecebidos.filter(campo => !camposPermitidos.includes(campo));

    if (camposInvalidos.length > 0) {
        return response.status(400).json({ message: `favor entrar apenas com o campo de avaliacao. Campos inválidos: ${camposInvalidos.join(', ')}` });
    }

    next();
};


module.exports = {
    validacaoTitle,
    validacaoAvaliacao,
    validacaoTitleAvaliacao,
    validacaoAtualizacaoAvaliacao
}