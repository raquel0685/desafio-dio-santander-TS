//Desafios TS:

/*1) Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";*/

let employee: {name: string, code:number} = {
   name: "John",
   code: 10
};

/*2) Como podemos melhorar o esse código usando TS? 
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
interface pessoa{
    nome:string,
    idade:number,
    profissao: profissao
};
enum profissao{
    Atriz,
    Padeiro,
}
const arrayPessoas: pessoa []=  [
{
    nome: "maria",
    idade: 29,
    profissao:profissao.Atriz
},
{
    nome: "roberto",
    idade: 19,
    profissao:profissao.Padeiro
},
{
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz  
},
{
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}
];

/*3) O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
*/
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let totalSoma = 0;

function somarAoSaldo(soma:number) {
    if(campoSaldo){
        totalSoma += soma;
        campoSaldo.innerHTML = totalSoma.toString();
    }
}
function limparSaldo(){
    if(campoSaldo){
        totalSoma = 0;
        campoSaldo.innerHTML = totalSoma.toString();
    }
}
if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', ()=>{
        somarAoSaldo(Number(soma.value));
    });   
}
if (botaoLimpar){
    botaoLimpar.addEventListener('click', ()=>{
        limparSaldo();
    });
}
