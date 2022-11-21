let maiorPontuacao = -1;
let timeVencedor;

timeComMaisPontos();

alert(`O ${timeVencedor}º time venceu com ${maiorPontuacao} pontos`);

function timeComMaisPontos(){

let pontuacao;

maiorPontuacao = Number(maiorPontuacao);


for (let i=0;i<2;i++){
    
    pontuacao = prompt("Digite a pontuação do "+(i+1)+"º time");
    pontuacao = Number(pontuacao);

    if (pontuacao>maiorPontuacao){
        timeVencedor = Number(i+1);
        maiorPontuacao = pontuacao;
    }
}

return timeVencedor,maiorPontuacao;
}