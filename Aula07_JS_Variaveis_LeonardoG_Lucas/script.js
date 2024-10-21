//DIFERENÇAS ENTRE VAR, LET E CONST

//VAR
var nome = "Adamastor";
console.log(nome);

if(nome==='Adamastor'){
    var escola = 'CESF';
    console.log(escola);
}
console.log(escola);

escola = 'Sagrada';
console.log(escola);
//com variaveis do tipo var podemos acessar
//fora do escopo de criação da variavel

//LET
if(nome === 'Adamastor'){
    let curso = 'DS';
    console.log(curso);
}
//console.log(curso);
curso = 'Desenvolvimento';
console.log(curso);

//let só permite o acesso a variavel no escopo onde ele foi criada (escopo de bloco) 
//se atribuirmos valor a ela é como se estivesemos declarando uma nova variavel
//do tipo var com o mesmo nome curso

//CONST
const cargo = 'Estudante';
console.log(cargo);
//cargo = 'Programador';
console.log(cargo);

//variaveis do tipo const tem escopo de bloco, com as let,mas ela não
//permite reatribuição de valor


//CRIAÇÃO DE VARIAVEIS SEM ATRIBUIÇÃO INICIAL
var aluno1;
aluno1 = 'Ana Clara';
console.log(aluno1);

let aluno2;
aluno2 = 'Bernardo';
console.log(aluno2);

//const aluno3, variaveis do tipo const não podem ser apenas declaradas
const aluno3 = 'Cremilda';
console.log(aluno3);
