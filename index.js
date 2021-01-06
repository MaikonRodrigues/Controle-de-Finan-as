const express = require('express')
const app = express()
const port = process.env.PORT || 8081
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const rotaPostagens = require('./routes/post')
const admin = require("./routes/admin")
const path = require("path")

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/* 
 * Definindo para o express o template engine a ser utilizado.
 * CONFIG 
 */
    //Template Engine
        app.engine('handlebars', handlebars({
            defaultLayout: 'main'
        }))
        app.set('view engine', 'handlebars')
    //Definindo onde ficarão os arquivos Public
        app.use(express.static(path.join(__dirname,"Public")))

//ROTAS
    app.use('/admin', admin)

    app.use('/', rotaPostagens)

//Start no servidor
    app.listen(port, function(){
        console.log('Servidor rodando na url http://localhost:' + port)
    })