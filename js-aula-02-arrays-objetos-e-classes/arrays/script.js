// ===============================
// DECLARAÇÃO DE ARRAYS (VETORES)
// ===============================

// Criando um array vazio
let produtos = []

// typeof mostra o tipo da variável (em JavaScript arrays são do tipo object)
document.write(typeof(produtos))


// Criando um array com alguns produtos
let products = ['computador', 'notebook', 'celular', 'tablet']

// Exibindo todo o array
document.write(`<p>${products}</p>`)


// ===============================
// ACESSANDO ELEMENTOS PELO ÍNDICE
// ===============================

// Cada item do array possui uma posição (índice)
// A contagem sempre começa do 0

document.write(`<p> Exibindo os elementos do vetor através do índice:</p>`)

document.write(`<p>${products[0]}</p>`) // computador
document.write(`<p>${products[1]}</p>`) // notebook
document.write(`<p>${products[2]}</p>`) // celular
document.write(`<p>${products[3]}</p>`) // tablet



// ===============================
// PERCORRENDO ARRAY COM forEach
// ===============================

// O forEach percorre todos os elementos do array automaticamente

document.write('<p>Exibindo elementos do vetor através do forEach</p>')

products.forEach((product) => {
    document.write(`<p>${product}</p>`)
})


// forEach também pode acessar o índice do elemento
document.write('<p>Exibindo elementos do vetor através do forEach com os índices</p>')

products.forEach((product, indice) => {
    document.write(`<p>${indice + 1} - ${product}</p>`)
})



// ===============================
// MÉTODOS DE MANIPULAÇÃO DE ARRAYS
// ===============================

// Criando um array de frutas
let frutas = ['banana', 'maçã', 'pera', 'abacaxi']

// Exibindo a lista inicial
document.write(`<p> Lista de Frutas é: ${frutas}</p>`)


// Adicionando um elemento manualmente através do índice
frutas[4] = 'morango'

// Exibindo lista atualizada
document.write(`<p> Agora Lista de Frutas é: ${frutas}</p>`)



// ===============================
// MÉTODO PUSH
// ===============================

// push() adiciona um elemento no FINAL do array

document.write(`<h4>O método PUSH - Insere um novo elemento no FINAL do vetor</h4>`)

frutas.push('abacate')

document.write(`<p> Agora Lista de Frutas é: ${frutas}</p>`)



// ===============================
// MÉTODO UNSHIFT
// ===============================

// unshift() adiciona um elemento no INÍCIO do array

document.write(`<h4>O método UNSHIFT - Insere um novo elemento no INÍCIO do vetor</h4>`)

frutas.unshift('melão')

document.write(`<p> Agora Lista de Frutas é: ${frutas}</p>`)



// ===============================
// CONTAR ELEMENTOS DO ARRAY
// ===============================

// length retorna a quantidade de elementos dentro do array

const items = frutas.length

document.write(`<p>Na lista possui ${items} frutas</p>`)