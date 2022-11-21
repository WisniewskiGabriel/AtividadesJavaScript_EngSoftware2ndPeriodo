let valorDigitado = prompt("Digite um valor");
let strMsg = "NÃO É MAIOR QUE 100!";

if(valorDigitado>100){
    strMsg="É MAIOR QUE 100!";
}
if(isNaN(valorDigitado)){
    strMsg = "Não é um número";
}
if(!valorDigitado.length>0){
    strMsg = "Nada foi digitado";
}

alert(strMsg);