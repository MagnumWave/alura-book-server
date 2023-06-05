const fs = require('fs');

function getTodosLivros(){
    return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    const livroPeloID = livros.find(livro => livro.id == id)
    return livroPeloID;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    const {nome} = livroNovo
    const livroReal = {
        id: `${getLastLivroID() + 1}`,
        nome: nome
    }
    const novosLivos = [...livros, livroReal];
    fs.writeFileSync('livros.json', JSON.stringify(novosLivos));
}

function getLastLivroID(){
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    return Number.parseInt(livros[livros.length - 1].id);
}

function atualizaLivroPorId(novaInfo, idDoLivro) {
    console.log(novaInfo, idDoLivro);
    let livros = JSON.parse(fs.readFileSync('livros.json'));
    let livroFiltradoPeloId = livros.find(livro => livro.id == idDoLivro)
    console.log("livro encontrado: ", livroFiltradoPeloId);
    livroFiltradoPeloId.nome = novaInfo.nome;
    console.log("mudando: ", livroFiltradoPeloId);
    console.log(livros);
    //const indiceModificado = livrosAtuais.findIndex(livro => livro.id === idDoLivro);
    //const conteudoMudado = {...livrosAtuais[indiceModificado], ...novaInfo}
    //livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync('livros.json', JSON.stringify(livros));
}

function deletaLivroPorId(id) {
    console.log(id);
    const livros = JSON.parse(fs.readFileSync('livros.json'));
    console.log(livros);
    const indiceParaDeletar = livros.findIndex(livro => livro.id == id)
    //pode não encontrar o indice
    console.log(indiceParaDeletar);
    livros.splice(indiceParaDeletar,1);
    console.log(livros);
    fs.writeFileSync('livros.json', JSON.stringify(livros));
    
}

// TODO: tratar IDs incosistentes ou que não existam
// TODO: tratar campo inválido no dto input: nome não pode ser nulo/vazio.
// TODO: personalizar as mensagens de erro. Empilhar mensagens em um array.
// se possível modularizar o handler de erro. 

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    atualizaLivroPorId,
    deletaLivroPorId
}