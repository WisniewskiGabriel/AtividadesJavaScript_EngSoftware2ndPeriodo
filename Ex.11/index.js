let valorLitroGasolina = Number(3.30);
let valorLitroAlcool = Number(2.90);
let objCompra = {'tipo':"",'qtd':"",'custoLt':0,'desconto':0,'custoFinal':0};

objCompra.tipo = prompt("Tipo do combustível");
objCompra.qtd = prompt("Qtd. (lts.) abastecida");

let strTipoCombustivel = String(objCompra.tipo); 

if (strTipoCombustivel.startsWith("a")){
    
    objCompra.custoLt = valorLitroAlcool;
    objCompra.tipo = "Álcool"

    if (objCompra.qtd > 20){
        objCompra.desconto = 4;
    }else{
        objCompra.desconto = 3;
    }
}
if (strTipoCombustivel.startsWith("g")){

    objCompra.custoLt = valorLitroGasolina;
    objCompra.tipo = "Gasolina"

    if (objCompra.qtd > 20){
        objCompra.desconto = 6;
    }else{
        objCompra.desconto = 4;
    }
}

let valorTotal = (Number(objCompra.custoLt))*(Number(objCompra.qtd));
let valorDesconto = (valorTotal/100)*Number(objCompra.desconto);
objCompra.custoFinal = valorTotal-valorDesconto;

console.log(objCompra);

alert(objCompra.qtd+" lt(s) do combustível "+objCompra.tipo+" foram adquiridos pelo custo de R\$"+objCompra.custoFinal.toFixed(2))
