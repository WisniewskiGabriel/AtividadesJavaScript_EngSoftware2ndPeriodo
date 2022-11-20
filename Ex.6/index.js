let strMsg;
let valorDigitado;
let strVisaoNegativa = ", eu vejo isso de maneira negativa...";

valorDigitado = prompt("Digite um valor e te digo se é positivo ou negativo!");
avaliarNumero(valorDigitado);
alert(strMsg);

function avaliarNumero(valorDigitado){
    let strLen = valorDigitado.length;
    strLen = Number(strLen);

    if(!strLen > 0){
        strMsg = "Nada foi digitado"+strVisaoNegativa;
        alert(strMsg);
        erroValorInvalido();
    }
    if(isNaN(valorDigitado)){
        strMsg = "O valor digitado não era numérico"+strVisaoNegativa;
        alert(strMsg);
        erroValorInvalido();
    }
    if(valorDigitado >= 0){
        strMsg = "O valor digitado é positivo";
    }
    if(valorDigitado < 0){
        strMsg = "O valor digitado é negativo";
    }
    return strMsg;
}

function erroValorInvalido() {
    throw "Valor inválido";
}

