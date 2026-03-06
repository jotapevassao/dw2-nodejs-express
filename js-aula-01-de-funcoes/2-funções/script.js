// =====================================================
// 1 - Função que mostra informações pessoais
// =====================================================

// Declaração da função showMessagem
// Essa função NÃO recebe argumentos (parâmetros)
function showMessagem (){

    // Variável que armazena uma mensagem em HTML
    // <h2> deixa o texto maior na página
    // <br> quebra linha
    const messagem ="<h2>1- Meu nome é João Pedro<br><br>19 anos<br><br>Pariquera-Açu</h2>";

    // document.write escreve conteúdo diretamente no HTML da página
    document.write(messagem);
}

// Aqui estamos chamando (executando) a função
showMessagem();

// Linha horizontal para separar os exercícios
document.write("<hr>");


// =====================================================
// 2 - Função que realiza uma divisão
// =====================================================

// Variáveis que serão usadas como argumentos na função
const n1 = 10; // primeiro número
const n2 = 5;  // segundo número

// Função chamada divisao
// Ela recebe dois argumentos:
// n1 = primeiro número da divisão
// n2 = segundo número da divisão
function divisao(n1, n2) {

    // Calcula a divisão entre os dois números
    let result = n1 / n2;

    // return devolve o resultado da função
    return result;
}

// Chamando a função e guardando o resultado na variável
let resultado = divisao(n1, n2);

// Mostrando o resultado na tela usando template string
document.write(`<h2>2- A divisão de ${n1} por ${n2} é igual a ${resultado}</h2>`);

// Linha de separação
document.write("<hr>");


// =====================================================
// 3 - Função de multiplicação
// =====================================================

// Números que serão multiplicados
const num1 = 30;
const num2 = 20;
const num3 = 10;

// Função chamada multiplicacao
// Ela recebe três argumentos:
// num1 = primeiro número
// num2 = segundo número
// num3 = terceiro número
function mutiplicacao(num1, num2, num3) {

    // Retorna a multiplicação dos três valores
    return num1 * num2 * num3;
}

// Exibe o resultado chamando a função
document.write(`<h2>3- A multiplicação de ${num1} por ${num2} por ${num3} é igual a ${mutiplicacao(num1, num2, num3)}</h2>`);

document.write("<hr>");


// =====================================================
// 4 - Função que verifica se a pessoa é maior de idade
// =====================================================

// Função que recebe um argumento:
// idade = idade da pessoa
function verificardoridade(idade) {

    // Estrutura condicional IF
    // Verifica se idade é maior ou igual a 18
    if (idade >= 18) {

        // Se for verdadeiro
        return "4- Você é Maior de idade";

    } else {

        // Caso contrário
        return "4- Você é Menor de idade";
    }
}

// Chamando a função passando o número 19 como argumento
document.write(`<h2>${verificardoridade(19)}</h2>`);

document.write("<hr>");


// =====================================================
// 5 - Função anônima para calcular média
// =====================================================

// Aqui criamos uma função anônima
// Ela é armazenada dentro da variável "result"

// Argumentos da função:
// nota1 = primeira nota
// nota2 = segunda nota
const result = function(nota1, nota2) {

    // Calcula a média das duas notas
    const media = (nota1 + nota2) / 2;

    // Variável para guardar o resultado final
    let resultado;

    // Verifica se a média é suficiente para aprovação
    if (media >= 7) {

        resultado = "5- Aprovado";

    } else {

        resultado = "5- Reprovado";
    }

    // Retorna o resultado
    return resultado;
}

// Chamando a função
document.write(`<h2>${result(8, 6)}</h2>`);

document.write("<hr>");


// =====================================================
// 6 - Arrow Function (função de seta)
// =====================================================

// Arrow Function que calcula o triplo de um número

// x = número recebido como argumento
// A função retorna x multiplicado por 3
const triplo = x => x * 3;

// Número que será usado no cálculo
const x = 200;

// Mostra o resultado da função
document.write(`<h2>6- O triplo de ${x} é ${triplo(x)}</h2>`);

document.write("<hr>");


// =====================================================
// 7 - Arrow Function que soma quatro números
// =====================================================

// Função de soma com quatro argumentos:
// x = primeiro número
// y = segundo número
// z = terceiro número
// r = quarto número
const somar = (x, y, z, r) => {

    // Retorna a soma dos quatro números
    return x + y + z + r;
};

// Números que serão somados
let numb1 = 1;
let numb2 = 2;
let n3 = 3;
let n4 = 4;

// Mostrando o resultado na tela
document.write(`<h2>7- O resultado ${numb1} + ${numb2} + ${n3} + ${n4} = ${somar(numb1, numb2, n3, n4)}</h2>`);