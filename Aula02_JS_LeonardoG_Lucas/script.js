var area=document.getElementById('area')

function entrar(){
    //alert("clicou");
    var nome =prompt('Digite seu nome:');
    //console.log(nome);
    area.innerHTML='Bem vindo '+nome+" ";

    //criando um botão no html a partir no JS
    let botaoSair = document.createElement('button');
    botaoSair.innerHTML = "Sair da conta";
    botaoSair.onclick = sair;

    area.appendChild(botaoSair);

}

function sair(){
    alert('Até mais')
    area.innerHTML = 'Você saiu';
}