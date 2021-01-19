const db = require('./db');
/*
 *      CRIAÇÃO E FUNÇÕES DA TABELA ENTRADA    
 */
    // Definição da tabela entrada
    const entrada = db.sequelize.define('entradas', {        
        valor: {
            type: db.Sequelize.DOUBLE
        },
        tipo: {
            type: db.Sequelize.INTEGER // 0 - Receita, 1 - Despesa
        },
        categoriaId: {
            type: db.Sequelize.INTEGER
        },
        contaId: {
            type: db.Sequelize.INTEGER
        }
    })
    // Adiciona entrada no banco de dados
    function addEntrada(entradas, callback) {
        entrada.create({
            valor: entradas.valor,
            tipo: entradas.tipo,
            categoriaId: entradas.categoriaId,
            contaId: entradas.contaId           
        }).then(function(){
            callback(null)
        }).catch(function(error) {
            callback(error)
        })
    }
    /*
    entrada.sync({
        force: true
    })*/
    module.exports = { 
        entrada,        
        addEntrada
    }