// O arquivo index.js é o arquivo principal do projeto

const express = require("express")
const app = express()

// configurando o ejs
app.set('view engine', 'ejs')

// rota principal
app.get("/", function(req, res) {
    res.render("index")
})

// rota perfil
app.get("/perfil", function(req, res) {
    res.render("perfil")
})

// rota clientes
app.get("/clientes", function(req, res) {
    res.render("clientes")
})

// rota produtos 
app.get("/produtos", function(req, res) {
    res.render("produtos")
})
// rota produtos 
app.get("/servicos", function(req, res) {
    res.render("servicos")
})

// iniciando servidor
const port = 8080
app.listen(port, function(error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!")
  } else {
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}`)
  }
})