const db = require('./db');
/*
 *      CRIAÇÃO E FUNÇÕES DA TABELAS POSTAGENS
 */
    //Definição da tabela postagem
    const Post = db.sequelize.define('postagens', {       
        titulo: {
            type: db.Sequelize.STRING
        },
        conteudo: {
            type: db.Sequelize.TEXT
        }
    })
    // Adiciona postagem no banco de dados
    function cadastrarPostagem(postagem, callback) {
        Post.create({
            titulo: postagem.titulo,
            conteudo: postagem.conteudo
        }).then(function(){
            callback(null)
        }).catch(function(error) {
            callback(error)
        })
    }




// Criação da tabela
 /*Post.sync({
     force: true
 })
*/

module.exports = { 
    Post,  
    cadastrarPostagem   
}