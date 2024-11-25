
//3 metados facilitadores: includes, starwith, endswill

//includes
let nomes =['Amir','Bemir','Cemir'];
console.log(nomes);
console.log(nomes.includes('Bemir'));

if(nomes.includes('Amir')){
    console.log("O meliante Amir está incluido no nosso array")
} else {
    console.log("O meliante Amir não está no array")
};
if(nomes.includes('Bemir')){
    console.log("O meliante Bemir está incluido no nosso array")
} else {
    console.log("O meliante Bemir não está no array")
};
if(nomes.includes('Cemir')){
    console.log("O meliante Cemir está incluido no nosso array")
} else {
    console.log("O meliante Bemir não está no array")
};

//startwith
let aluno = 'Albano'
console.log(aluno.startsWith('Alb'));
console.log(aluno.startsWith('alb'));

//endwith
console.log(aluno.endsWith('ano'));