// CLASSES NO JAVASCRIPT

//NOME DE CLASSES DEVEM  INICIAR COM A PRIMEIRA LETRA MAIUACULA
class Carro {
    // DEFININDO OS ATRIBUTOD 
    constructor(marca, modelo, ano) {
        // this é uma referencia as instancias que serao criadas atraves dessa
        // classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // DEFINIDO OS MÉTODOS 
    buzinar(){
        return "Beep! , Beep!";
    }
 }

 // INSTANCIANDO OBJETOS 
const CarroPopular = new  Carro("fiat", "Uno", "2012");

document.write(
    `<p>O carro ${CarroPopular.marca} modelo ${CarroPopular.modelo} é do ano ${CarroPopular.ano
} e quando buzinar faz ${CarroPopular.buzinar()}</p>`,
);
