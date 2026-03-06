function showMessagem (){
    const messagem ="<h2> 1- Meu nome é João pedro<br> <br> 19 <br> <br> Pariquera Açu <br> </h2>";
    document.write(messagem);
}
showMessagem();

document.write("<hr>");

const n1 = 10;
const n2 = 5;

function divisao(n1, n2) {
    let result = n1 / n2;
    return result;
}

let resultado = divisao(n1, n2);

document.write(`<h2>2- A divisão de ${n1} por ${n2} é igual a ${resultado}</h2>`);

document.write("<hr>");

const num1 = 30;
const num2 = 20;
const num3 = 10;


function mutiplicacao(num1, num2, num3) {
    return num1 * num2 * num3;
}

document.write(`<h2>3- A mutiplicacão de ${num1} por ${num2} por ${num3} é igual a ${mutiplicacao(num1, num2, num3)}.</h2>`);

document.write("<hr>");

function verificardoridade(idade) {
    if (idade >= 18) {
        return "4- você é de Maior de idade";
    } else {
        return "4- você é de Menor de idade";
    }
}
document.write(`<h2>${verificardoridade(19)}</h2>`);

document.write("<hr>");

const result = function(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    let resultado;

    if (media >= 7) {
        resultado = "5- Aprovado";
    } else {
        resultado = "5- Reprovado";
    }

    return resultado;
}

document.write(`<h2>${result(8, 6)}</h2>`);

document.write("<hr>");

const resul = function(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    let resultado;

    if (media >= 7) {
        resultado = "5- Aprovado";
    } else {
        resultado = "5- Reprovado";
    }

    return resultado;
}

document.write(`<h2>${result(8, 6)}</h2>`);

document.write("<hr>");

// Arrow Function que calcula o triplo
const triplo = x => x * 3;

// Número que será usado
const x = 200;

// Mostra o resultado na tela

document.write(`<h2>6- O triplo de ${x} é ${triplo(x)}.</h2>`);
document.write("<hr>");
const somar = (x, y, z, r) => {
    return x + y + z + r;
};

let numb1 = 1, numb2 = 2, n3 = 3, n4 = 4;

document.write(`<p><h2>7- O resutado${n1} + ${n2} + ${n3} + ${n4} = ${somar(n1, n2, n3, n4)}</p>`);