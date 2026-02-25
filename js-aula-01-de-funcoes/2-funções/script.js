// TIPOS DE FUNÇOES 
// FUNÇÃO SIMPLES 
function showMessagem (){
    const messagem = "<h2>olá, bem-vindo!</h2>";
    document.write(messagem);
}
// INOVACANDO A FUNÇAO
showMessagem();

// FUNÇAO COM PARAMETRO / ARGUMENTO
const user = "jotape ";

function showMessagem(user) {
    // Essa função recebe um parametro 
    document.write(`<h3>o que  deseja fazer hoje, ${user}?</h3>`)

}
showMessagem(user) //Envio de argumento

// funçao com mais de um parametro
const n1 = 10;
const n2 = 5;
 function sum(n1,n2) {
    //Essw funcao recebe dois parametros
    let result = n1 + n2;
    document.write(`<p> A soma de ${n2} é igual a ${result}.</p>`);
 }

 // invocando a funcao
 sum(n1,n2); // Enviando os argumentos 

 // funcao com retorno
 const num1 = 50;
 const num2 = 3;
 

 //É indicado que as funcoes  possuam o minimo dde responsabilidades possiveis
 // essa funcao ira multiplicar dois numeiros
 function mult(num1, num2) {
    return num1 * num2;
 }

 document.write(`o resultado da multiplicacao e ${mult(num1,num2)}.`);

 // funcao com retorno  condicional 
 const number = 7;

 function parImpar(number) {
    if (number % 2 == 0) {
        return "par";
    } else{
        return "impar";

    }       
 }
document.write(`<p>O número ${number} é ${parImpar(number)}.</p>`)

// funcao anonima
const divisao = function (n) {
    return n / 2;
};
let numeiro = 200;

document.write(`<p>A metade de ${numeiro} é ${divisao(numeiro)}.</p>`)

// FUNÇÃO SETA (ARROW FUCTTION) -> É UM TIPO DE FUNCAO DE ANONIMA 
const dobro = (x) => {
    return x * 2;

};
const x = 300;
document.write(`<p> O dobro de ${x}é ${dobro(x)}.</p>`)

// arrow fuctio com mais de paremetro
const calculadora = (a, operador, b) =>{
    return eval(`${a} ${operador} ${b} `);
};

document.write(`<p> O resultado da operacao matematica é 
    ${calculadora(1100,"-", 100)}<p>`);
