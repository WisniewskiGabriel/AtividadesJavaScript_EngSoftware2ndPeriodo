let valorDoCarro = prompt("Qual o custo de fábrica?");
valorDoCarro = Number(valorDoCarro);
let valorDoImposto = (valorDoCarro/100)*45;
let valorDoDistribuidor = (valorDoCarro/100)*28;
valorDoCarro = valorDoCarro+valorDoDistribuidor+valorDoImposto;
alert("Com a adição de impostos e % do distribuidor, o custo total do carro é R\$"+valorDoCarro);  