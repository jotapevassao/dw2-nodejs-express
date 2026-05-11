// CONTROLLER DE USUÁRIO
import express from "express";
const router = express.Router();

// ROTA DE LOGIN
app.get("/login", (req, res) => {
  res.render("login");
});

// ROTA DO FORMULÁRIO DE CADASTRO DO USUÁRIO
router.get("/cadastro")
