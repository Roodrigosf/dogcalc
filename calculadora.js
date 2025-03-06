const teste1 = document.querySelector ('#digito1');
const teste2 = document.querySelector ('#digito2');
const tipo = document.querySelector ('#operacao');
const solucao = document.querySelector ('#igual');
let resposta =document.querySelector ('#resposta');


solucao.addEventListener ('click' ,calcular);

function calcular () {
    const valor1 = parseInt (teste1.value) ;
    const valor2 = parseInt (teste2.value) ;
    const operacao = tipo.value

    if (operacao ==="somar")
    resposta.innerHTML = valor1 + valor2;

    if (operacao ==="subitrair")
        resposta.innerHTML = valor1 - valor2;


    if (operacao ==="multiplicar")
        resposta.innerHTML = valor1 * valor2;

    if (operacao ==="dividir")
        resposta.innerHTML = valor1 / valor2;



}



