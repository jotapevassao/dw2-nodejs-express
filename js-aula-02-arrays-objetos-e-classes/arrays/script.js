// Declarando e exibindo itens de um array
let produtos = []
document.write(typeof(produtos))

let products = ['computador', 'notebook', 'celular', 'tablet'];
document.write(`<p>${products}</p>`);

//ATRVÉS DE UM ÍNDICE 
document.write(`<p> Exibindo os elementos do vetor através do índice:</p>`)
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

//ATRAVÉS DO forEACH
document.write('<p>Exibindo elementos do vetor através do forEach</p>')
products.forEach((product) => {
    document.write(`<p>${product}</p>`);
});

document.write('<p>Exibindo elementos do vetor através do forEach com os indices</p>');
products.forEach((product, indice) => {
        document.write(`<p>${indice+1} - ${product}</p>`)
    })

// MÉTODOS DE MANIPULÇÃO DE VETORES
let frutas = ['banana', 'maçã', 'pera', 'abacaxi']
document.write(`<p> Lista de Frutas é: ${frutas}</p>`)
frutas[4] = 'morango'
document.write(`<p> Agoras Lista de Frutas é: ${frutas}</p>`)

document.write(`<h4>O método PUSH - Insere um novo elemento no FINAL do vetor</h4>`)
frutas.push('abacate')
document.write(`<p> Agora Lista de Frutas é: ${frutas}</p>`)

document.write(`<h4>O método UNSHIFT - Insere um novo elemento no INICIO do vetor</h4>`)
frutas.unshift('melão')
document.write(`<p> Agora Lista de Frutas é: ${frutas}</p>`)

//COMO CONTAR OS ELEMENTOS DE UM VETOR - Método LENGTH
const items = frutas.length
document.write(`<p>Na Lista possui ${items} frutas</p>`)