let qtdComprada = 0;
let valorItem = 0;
let valorTotal;

qtdComprada = prompt("Quantas maçãs estão sendo compradas?");

if(isNaN(qtdComprada) | !qtdComprada.length>0){
    alert("Input inválido")
    throw "Input inválido";
}

if (qtdComprada < 12 && qtdComprada > 0 && !valorItem>0){
    valorItem = 1.3;
}
if (qtdComprada >= 12 && !valorItem>0){
    valorItem = 1;
}

valorTotal = qtdComprada*valorItem;

alert("O valor da compra inteira é de R\$"+valorTotal.toFixed(2));