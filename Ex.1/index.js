let valorSalario = 0; // Valor global do salário, na entrada e saída

pegarValorInput("Informe o valor do salário");
valorSalario = valorNumericoInput; // Associar imediatamente a var do salário

pegarValorInput("Informe a % do aumento"); 
porcAumento = valorNumericoInput;

calcularAumento(valorSalario,porcAumento); // Passa o valor do sál. e aumento para calcular internamente;

exibirAlerta(`R\$ ${valorSalario}`);

function pegarValorInput(strMensagem){

    // Lê o input, checa se é válido.
    // Se válido: converte para 'number' e retorna o valor
    // Se inválido: Gera alerta e joga uma exceção.

    let i = 0;
    let maxTentativas = 2;

    maxTentativas = Number(maxTentativas);
    let isValorNaN;
    let indexDoWhile = 0;
    let isIgnoreStrLen = false;

    do {
        valorNumericoInput = window.prompt(strMensagem);

        strLen = valorNumericoInput.length;
        isValorNaN = isNaN(valorNumericoInput);
        isIgnoreStrLen = false;

        if (isValorNaN){
            alert("O valor inserido não é numérico");
            strLen = 0;
            isIgnoreStrLen = true;
        }

        if (!strLen>0 && !isIgnoreStrLen){
            alert("Nenhum valor foi inserido");
        }
        
        valorNumericoInput = Number(valorNumericoInput);

        i++;

    } while(!strLen>0 && i<=maxTentativas)

    if (!strLen>0 | isValorNaN){
        erroEmpty(maxTentativas);
        throwInputInvalido();
    }

    return valorNumericoInput;
}

function exibirAlerta(msgAlert){

    //Apenas exibe a mensagem kkkk

    window.alert(msgAlert);
}

function erroEmpty(maxTentativas){

    // Void para informar que o cálculo não será feito, já que o usuário não informou nenhum valor válido;

    maxTentativas = maxTentativas+1;
        alert("Caro usuário, durante "+maxTentativas+" tentativas nenhum valor válido foi inserido.");
}

function throwInputInvalido(){

    // Jogar exceção para terminar a execução, já que mesmo que calculado, falhará

    throw 'Input inválido.';
}

function calcularAumento(salario,aumento){

    // Soma simples e retorna cálculo

    valorSalario = salario / 100 * aumento;     
    valorSalario = salario+valorSalario;
    return valorSalario;
}