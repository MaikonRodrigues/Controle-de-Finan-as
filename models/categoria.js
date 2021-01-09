const db = require('./db');
/*
 *      CRIAÇÃO E FUNÇÕES DA TABELAS CATEGORIAS
 */
    // Definição da tabela Categoria
    const categoria = db.sequelize.define('categorias', {        
        nome: {
            type: db.Sequelize.STRING
        },
        tipo: {
            type: db.Sequelize.INTEGER // 0 - Receita, 1 - Despesa
        }
    })
    // Adiciona categorias no banco de dados
    function addCategoria(categorias, callback) {
        categoria.create({
            nome: categorias.name,
            tipo: categorias.tipo             
        }).then(function(){
            callback(null)
        }).catch(function(error) {
            callback(error)
        })
    }
    /*
    categoria.sync({
        force: true
    })*/
    module.exports = { 
        categoria,        
        addCategoria
    }