//Sintax da função sem parametros
//function cadastrar aluno(){console.log('A casa caiu')}

//sitax da função com parâmetros
//function.somar(a,b){return somar (3,4)}
function somar (a,b){
    let total = a+b;
    console.log(total);
};
somar(7.8,9.17);

//sintax da função anônima
//()=>{}
//():Por onde a função recebe os argumentos (Parâmetros) como ocorre nas funções tradicionais 
//=>; responsavel pelo nome arrow
//(); p bloco de codigo que representa o escopo da função
let subtrair = (valor1,valor2)=>{
    let resultado = valor1-valor2
    console.log(resultado)
}
subtrair(10.9865,6.0089);

let numeros = [1,3,5,10];

numeros.map((item)=>{
    console.log(item)
});