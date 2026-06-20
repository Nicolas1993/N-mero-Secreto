let listaNumerosSorteados = [];
let numeroLimite = 100
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {


let titulo = document.querySelector(tag);
titulo.innerHTML = texto;
}
function exibirmensageminicial(){
exibirTextoNaTela('h1', "O jogo do número secreto");
exibirTextoNaTela('p', 'Digite o número de 1 A 100');
}
exibirmensageminicial();

exibirTextoNaTela();


function verificarChute(tag) {
   let chute = document.querySelector("input").value
   
   if( chute == numerosecreto){
exibirTextoNaTela('h1', 'Acertou!' );
    let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';    
    let mensagemTentativas = `Parábens você acertou com ${tentativas} ${palavraTentativas}`;
    
exibirTextoNaTela("p", mensagemTentativas);
document.getElementById("reiniciar").removeAttribute("disabled");
}
else
if(chute > numerosecreto){
exibirTextoNaTela('p', 'O número é menor ');

}else {
    exibirTextoNaTela('p', 'Número é maior');
}
tentativas++
limparcampo();


}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let listaElementosSorteados = listaNumerosSorteados.length;
if (listaElementosSorteados == numeroLimite) {
    listaNumerosSorteados = [];
}

if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
}else{
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados)
        return numeroEscolhido;
}
}



function limparcampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirmensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

reiniciarJogo();