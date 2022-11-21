let empregado = [];
let anoAtual = new Date().getFullYear();
let diferencaAnos;
let scoreAposentar = 0;
let mensagemFinal = "Não requerer";

lerDadosDoEmpregado();

console.log(empregado);

checarDifAnos(anoAtual,empregado.anoNascimento);
let idadeEmpregado = diferencaAnos;

checarDifAnos(anoAtual,empregado.anoIngresso);
let anosIngresso = diferencaAnos;

checarSeDeveAposentar (idadeEmpregado,anosIngresso);

if(scoreAposentar>0){
    mensagemFinal = "Requer aposentadoria";
}

alert(mensagemFinal);

function lerDadosDoEmpregado(){
    
    let nome;
    let anoIngresso;
    let anoNascimento;

    nome = prompt("Nome do empregado");
    anoNascimento = prompt("Ano de nascimento");
    anoIngresso = prompt("Ano de ingresso na empresa");

    empregado = {'nome': nome,'anoIngresso':anoIngresso,'anoNascimento':anoNascimento};

    return empregado; 
}

function checarDifAnos (anoAtual, anoNascimento){

    diferencaAnos = anoAtual-anoNascimento;     
    return diferencaAnos;
}

function checarSeDeveAposentar(idade,tempoTrabalhado){
    
    if (idade >= 65){
        scoreAposentar++;
    }
    if (tempoTrabalhado >= 30){
        scoreAposentar++;
    }
    if (idade>=65 && tempoTrabalhado >= 25){
        scoreAposentar++;
    }

    return scoreAposentar;
}