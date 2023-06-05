const { getTodosLivros, getLivroPorId, insereLivro, atualizaLivroPorId, deletaLivroPorId } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.status(200).json(livros)    
    } catch (error) {
        res.status(500).json({mensagem: error.message})
        return;
    }

}

function getLivro(req, res) {
    console.log(req.params.id);
    const treco = getLivroPorId(req.params.id)
    res.status(200).json(treco)
    
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        //console.log(livroNovo);
        insereLivro(livroNovo);
        res.status(201).json({})
    } catch (error) {
        res.status(200).json({})
    }
}

function patchLivro(req, res) {
    const novaInfo = req.body;
    const idDoLivro = req.params.id
    atualizaLivroPorId(novaInfo, idDoLivro);
    res.status(200).json({});
}

function deleteLivro(req, res) {
    const id = req.params.id;
    deletaLivroPorId(id)
    res.status(200).json({});
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}