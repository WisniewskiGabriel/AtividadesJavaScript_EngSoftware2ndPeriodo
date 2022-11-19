pegarSalario();
checarValidadeDoSalario(valorSalario);

function pegarSalario(){
    let i = 0;
    do {
        valorSalario = window.prompt("Informe o valor do salário");
        strLen = valorSalario.length;
        if (!strLen>0){
            alert("Nenhum valor foi inserido");
        }
        i++;
    } while(!strLen>0 && i<10)
    if (!strLen>0){
        alert("Caro usuário, durante 10 tentativas nenhum valor for inserido.")
        throw 'Length da string inserida não é maior que 0';
    }

    return valorSalario;
}

function exibirAlerta(msgAlert){
    window.alert(msgAlert);
}

function checarValidadeDoSalario(valorSalario){
    
    let isSalarioNumber = isNaN(valorSalario);
    let salarioLength = valorSalario.length;

    valorSalario=Number(valorSalario);
    console.log(valorSalario);
    console.log(typeof(valorSalario));
    
    return isSalarioNumber, salarioLength;
}
