pegarSalario();
// Lê o input, checa se é válido.
// Se válido: converte para 'number' e retorna o valor
// Se inválido: Gera alerta e joga uma exceção.
function pegarSalario(){ 
    let i = 0;
    let maxTentativas = 2;

    maxTentativas = Number(maxTentativas);
    let isSalarioNaN;
    let indexDoWhile = 0;
    let isIgnoreStrLen = false;

    do {
        valorSalario = window.prompt("Informe o valor do salário");

        strLen = valorSalario.length;
        isSalarioNaN = isNaN(valorSalario);
        isIgnoreStrLen = false;

        if (isSalarioNaN){
            alert("O valor inserido não é numérico");
            strLen = 0;
            isIgnoreStrLen = true;
        }

        if (!strLen>0 && !isIgnoreStrLen){
            alert("Nenhum valor foi inserido");
        }
        
        i++;

    } while(!strLen>0 && i<=maxTentativas)

    if (!strLen>0 | isSalarioNaN){
        erroEmpty(maxTentativas);
        throwInputInvalido();
    }

    return valorSalario;
}

function exibirAlerta(msgAlert){
    window.alert(msgAlert);
}

function erroEmpty(maxTentativas){
    maxTentativas = maxTentativas+1;
        alert("Caro usuário, durante "+maxTentativas+" tentativas nenhum valor válido foi inserido.");
}

function throwInputInvalido(){
    throw 'Input inválido.';
}