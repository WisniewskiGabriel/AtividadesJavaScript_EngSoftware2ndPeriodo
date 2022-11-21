let numero;
let arrayTabuada = [];

numero = prompt("Digite o nº para cálculo da tabula");

for (i=0;i<10;i++){
    arrayTabuada.push(numero+" x "+" "+(i+1)+" = "+numero*(i+1)+"\n");
}

strTabuada = String(arrayTabuada);
strTabuada = strTabuada.replace(/[,]*/g, '');
alert(strTabuada);    
console.log(arrayTabuada);
