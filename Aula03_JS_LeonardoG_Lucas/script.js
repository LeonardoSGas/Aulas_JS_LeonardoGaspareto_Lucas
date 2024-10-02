var lista = ['aluno1', 'aluno2', 100];
//consumido o Array

console.log(lista);
//consumindo um elemento específico do array
console.log(lista[2]);

//descubrindo o tamanho do array
console.log(lista.length);

//saber se um elemento está no array
console.log(lista.indexOf('aluno3'));
console.log(lista.indexOf('aluno1'));

//alterar uma informação/elemento dentro do array
lista[0]='Helô';
console.log(lista);
lista[1]='Lorenzo';
console.log(lista);
lista[2]=3;
console.log(lista);

//inserir um novo elemento dentro do array
lista.push('Clementina')
console.log(lista);

//ecluir o primeiro elemento do array
lista.shift();
console.log(lista);

//ecluir o ultimo elemento do array
lista.pop();
console.log(lista);

//retornar os itens dentro do array com um separador de ângulo oposto
console.log(lista.join(' / '));
