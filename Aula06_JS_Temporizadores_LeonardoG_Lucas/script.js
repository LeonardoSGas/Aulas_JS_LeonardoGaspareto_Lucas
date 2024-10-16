// function acao(){
//     document.write("executando ....<br/>");
// }


//temporizador
//setInterval(acao,2000);

// setInterval(()=>{
//     document.write("Executando atravéz do arrow function ...<br/>")
// }, 1000);

//clearInterval(timer);

// var timer = setInterval(()=>{
//     document.write("Executando atravéz do arrow function ...<br/>")
// }, 1000);


//outro temporizador
function acao2(){
    document.write("Executando com o setTimeout!");
}

setTimeout(acao2,3000);

setTimeout(()=>{
    document.write("<br>Executando com arrow function!")
},4000);