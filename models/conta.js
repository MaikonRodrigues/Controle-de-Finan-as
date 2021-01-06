const db = require('./db');
/*
 *      CRIAÇÃO E FUNÇÕES DA TABELA CONTA   
 */
    // Definição da tabela conta
    const conta = db.sequelize.define('contas', {        
        nome: {
            type: db.Sequelize.STRING
        },
        entradaID: {
            type: db.Sequelize.INTEGER
        } 
    })
    // Adiciona conta no banco de dados
    function addConta(contas, callback) {
        conta.create({
            nome: contas.nome,
            entradaID: null             
        }).then(function(){
            callback(null)
        }).catch(function(error) {
            callback(error)
        })
    }
    
    /*conta.sync({
        force: true
    })*/
    module.exports = { 
        conta,        
        addConta
    }