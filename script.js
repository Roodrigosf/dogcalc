/*let nome; 
let idade;
let homem;
homem = true;
nome = 'Rodrigo';
idade = 23 ;


console.log (typeof nome)
console.log (typeof idade)
console.log (typeof homem)
*/

/* idade = 17;
nome = 'Rodrigo';

let mensagem = ` com ${idade}. é proibido acessar este site `

if (idade >= 18 ) { 
    console.log ('seja bem-vindo ' + nome );

}
else{
    console.log ('Acesso negado para menores' )
    console.log (idade + " proibido!!!  " + mensagem)

}
console.log (nome); */

/*
console.log ("oi mundo teste link pagina");


let dados = {nome: 'ROdrigo' ,
            idade: 26,
            sexo: 'masculino'
            };


console.log (dados.nome)
console.log (dados.idade)
console.log (dados.sexo)
console.log (dados['nome'])

let listadeDesejos =["carro" , "apartamento" , "casa" , "viagem"];

console.log (listadeDesejos)
console.log (listadeDesejos[3])

*/
//APRENDIZADO SOBRE COMANDOS PARA MODIFICAR TEXTO E INTERAGIR COM O HTML
let paragrafo = document.querySelector ("#p1");

paragrafo.addEventListener ('mouseover' , trocar);
paragrafo.addEventListener ('mouseout' , trocar1);
paragrafo.addEventListener ('click' , trocar2);

function trocar() {
    paragrafo.style.background='green';
}
function trocar1 (){
    paragrafo.style.background='red';
}
function trocar2 (){
    paragrafo.style.background='blue';
}


let reset = false;
let modificado = false ;
let click = 0;
let botao = document.querySelector ("#mudacor");
botao.style.background = 'red';

let botaor = document.querySelector ("#volta");



botao.addEventListener('mouseover' ,e => {
    if (!modificado /*=== false*/)
    botao.style.background ='blue';
});  

botao.addEventListener('mouseout' ,e => {
    if (!modificado /*=== false*/)
    botao.style.background ='red';
});

botao.addEventListener('click' ,e => {
    click ++;
    if (click >= 5 ) {
    botao.style.background ='pink';
    botao.innerHTML = 'mudei'; 
    modificado = true; 
    }
});

botaor.addEventListener ('click' , e => {
modificado=false;
click = 0;
botao.innerHTML = 'Botão que muda de cor';
});





/*function trocaverde (){
    botao.style.background= 'green';
}  */
