// O arquivo index.js é o arquivo principal do projeto

// importando o módulo do Express
const express = require("express");

// criando uma instancia do Express
const app = express();

// configurando o EJS
app.set("view engine", "ejs");

// rota principal
app.get("/", function (req, res) {
  res.render("index");
});

// rota perfil
app.get("/perfil", function (req, res) {
  res.render("perfil");
});

// rota principal
app.get("/", function (req, res) {
  res.render("index");
});

// rota clientes sem parâmetro
app.get("/clientes", function(req, res) {
  const clientes = ""
  const listaClientes = ['pietro', 'Eduarda', 'Jordana','Gabi','Paulo'];

    res.render("clientes", {
      clientes : clientes,
      listaClientes : listaClientes
    })
})
// rota clientes com parâmetro
app.get("/clientes/:cli", function(req, res) {
  const clientes = req.params.cli
    res.render("detalhesClientes", {
      clientes:clientes
    })
})

// rota serviços
app.get("/servicos", function (req, res) {
  res.render("servicos");
});
//rota de produto sem paremetro
app.get("/produtos",  (req, res) => {
  const listaProdutos = ['Computador', 'celular' , 'Tablet', 'Notebook' ]; 
  res.render("produtos", {
  listaProdutos: listaProdutos,
  });

});


// rota produtos com parametro
app.get("/produtos/:produto",  (req, res) => {
  const produto  = req.params.produto 
  res.render("detalhesProduto", {
  produto : produto,
  });

});

// iniciando o servidor
const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
