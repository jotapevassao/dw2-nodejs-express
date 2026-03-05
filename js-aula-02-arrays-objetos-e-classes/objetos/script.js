document.write(`<h4>Objetos literais possuem Atributos (propriedades)
     e Métodos(funções)</h4>`);

const pessoa = {}
document.write(typeof pessoa);

const carro = {

    modelo:"gol",
    cor:"vermenlho",
    acelerar(){
        return"Vrummmm";
    },
frear(){
return"Freando";
},
}

document.write(`<p>O modelo do carro é: ${carro.modelo}</p>`)
document.write(`<p>O modelo do carro é: ${carro.cor}</p>`)
document.write(`<p>Quando o carro acelerar ele faz ${carro.acelerar()}</p>`)
document.write(`<p>Quando o carro freae mostrará ${carro.frear()}</p>`);


//MANIPULANDO ARRAYS DE OBJETOS
const productlist = [
    {
        nome: "computador",
        marca:"HP",
        preco: 3000,
        descricao: "Ótima velocidade de processamento",
    },
    {
        nome: "celular",
        marca:"Apple",
        preco: 15000,
        descricao: "Moderno e veloz",
    },
    {
        nome: "tablet",
        marca:"Sangsung",
        preco: 4000,
        descricao: "Custo beneficio",
    },

];

//EXIBINDO O ARRAY DE OBJETOS ATRAVÉS DO forEACH
productlist.forEach((product) =>{
    document.write(`
        Produto:${product.nome}<br>
        Marca:${product.marca}<br>
        Preco:${product.preco}<br>
        Descricao:${product.descricao}<br><br>
        `)
})

