let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let quantidadeChute = 1;

mensagemInicial();

function mensagemInicial()
{
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('.texto__paragrafo', 'Escolha um número entre 1 e 4');
}
function exibirTexto(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function gerarNumeroAleatorio()
{
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;

    if (quantidadeElementosLista == numeroLimite)
        listaNumeroSorteados = [];
    //Se numero sorteado ja tiver numero escolhido
    if (listaNumeroSorteados.includes(numeroEscolhido))
        return gerarNumeroAleatorio();
    else
    {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    } 
}
function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}
function verificarChute()
{
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto)
    {
        let textoTentativas = quantidadeChute == 1 ? 'tentativa' : 'tentativas'; 
        
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', `Você descobriu o número secreto com ${quantidadeChute} ${textoTentativas}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if (chute > numeroSecreto)
        {
            exibirTexto('p', 'O número secreto é menor');
        }
        else
        {
            exibirTexto('p', 'O número secreto é maior');
        } 
        quantidadeChute++;
        limparCampo();
    } 
}
function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    quantidadeChute = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

