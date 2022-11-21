let valor;
let qtdNeg = 0;

for(i=0;i<10;i++){
    valor = prompt("Digite o "+(Number(i)+1)+"º valor.");
    valor = Number(valor);

    if (valor<0){
        qtdNeg = qtdNeg+1;
    }
}
alert("Existe(m) "+qtdNeg+" valores negativos dentre os digitados");