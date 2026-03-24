// ===============================
// IMPORTANDO O EXPRESS
// ===============================
const express = require("express");

// ===============================
// CRIANDO A APLICAÇÃO
// ===============================
const app = express();

// ===============================
// CONFIGURANDO O TEMPLATE ENGINE (EJS)
// ===============================
app.set("view engine", "ejs");

// ===============================
// ROTA PRINCIPAL (/)
// ===============================
app.get("/", function (req, res) {
  res.render("index"); // renderiza a página index.ejs
});

// ===============================
// ROTA DE PERFIL
// ===============================
app.get("/perfil", function (req, res) {
  res.render("perfil"); // renderiza perfil.ejs
});

// ===============================
// ROTA DE CLIENTES (SEM PARÂMETRO)
// ===============================
app.get("/clientes", function (req, res) {
  const clientes = ""; // variável simples (não usada muito aqui)
  
  // lista de clientes
  const listaClientes = ["pietro", "Eduarda", "Jordana", "Gabi", "Paulo"];

  // enviando dados para a view
  res.render("clientes", {
    clientes: clientes,
    listaClientes: listaClientes,
  });
});

// ===============================
// ROTA DE CLIENTES (COM PARÂMETRO)
// ===============================
app.get("/clientes/:cli", function (req, res) {
  const clientes = req.params.cli; // pega o nome do cliente pela URL

  res.render("detalhesClientes", {
    clientes: clientes,
  });
});

// ===============================
// ROTA DE SERVIÇOS
// ===============================
app.get("/servicos", function (req, res) {
  
  // array de objetos com serviços
  const servicos = [
    {
      servicos: "Desenvolvimento Web",
      descricao: "Criação de sites com Node.js e interação a banco de dados",
      preco: 3500,
    },
    {
      servicos: "Auditoria de UX/UI",
      descricao: "Avaliação da usabilidade de sistemas com sugestão de melhoria",
      preco: 1800,
    },
    {
      servicos: "Infraestrutura em Nuvem",
      descricao: "Configuração de servidores e hospedagem de aplicações",
      preco: 2900,
    },
    {
      servicos: "Chatbot com IA",
      descricao: "Desenvolvimento de chatbot para atendimento automático",
      preco: 2750,
    },
  ];

  // envia os dados para a view
  res.render("servicos", {
    servicos: servicos,
  });
});

// ===============================
// ROTA DE PRODUTOS (SEM PARÂMETRO)
// ===============================
app.get("/produtos", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];

  res.render("produtos", {
    listaProdutos: listaProdutos,
  });
});

// ===============================
// ROTA DE PRODUTOS (COM PARÂMETRO)
// ===============================
app.get("/produtos/:produto", (req, res) => {
  const produto = req.params.produto; // pega o produto pela URL

  res.render("detalhesProduto", {
    produto: produto,
  });
});

// ===============================
// INICIANDO O SERVIDOR
// ===============================
const port = 8080;

app.listen(port, function (error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});