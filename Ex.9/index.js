let arrayTimes = [];
let nomeTime;
let isJogoEmpatado;

for (i=0;i<2;i++){
    nomeTime = prompt("Nome do "+(i+1)+"º time");
    golsMarcados = prompt("Qtd. de gols marcados pelo "+(i+1)+"º time.");
    objTime = {'nome':nomeTime,'gols': golsMarcados};
    arrayTimes.push(objTime);    
}

console.log(arrayTimes);

if(arrayTimes[1].gols === arrayTimes[0].gols){
    isJogoEmpatado = true;
    alert("O time "+arrayTimes[0].nome+" empatou com o "+arrayTimes[1].nome+" com "+arrayTimes[0].gols+" gols cada!");
} else {
    isJogoEmpatado = false;
}

if(!isJogoEmpatado){

    let maiorNumeroGols = 0;
    let nomeVencedor;
    let golsAgora;
    maiorNumeroGols = Number(maiorNumeroGols);

    for (i=0;i<2;i++){
        golsAgora = Number(arrayTimes[i].gols);
        if (golsAgora>maiorNumeroGols){
            maiorNumeroGols = golsAgora;
            nomeVencedor = arrayTimes[i].nome;
        }
    }
    
    alert(`O time ${nomeVencedor} venceu com ${maiorNumeroGols} gols`);
}

// É... eu sei, esse aqu tá bagunçado. É a pressa.

