let nota1,nota2,nota3,mediaFinal;

nota1 = prompt("Digite a 1ª nota");
nota2 = prompt("Digite a 2ª nota");
nota3 = prompt("Digite a 3ª nota");

calcularMedia(nota1,nota2, nota3);
alert("A nota final é: "+mediaFinal);

function calcularMedia(n1,n2,n3){
    n1 = n1*2;
    n2 = n2*3;
    n3 = n3*5;
    mediaFinal = (n1+n2+n3)/10;
    return mediaFinal;
}