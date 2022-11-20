let baseTriangulo = prompt("Base do triângulo");
let alturaTriangulo = prompt("Altura do triângulo");
let area;

calcularArea(alturaTriangulo,baseTriangulo);
let areaTriangulo = area;
alert("Área do triângulo: "+areaTriangulo);

function calcularArea (altura,base){
    area = (altura*base)/2;
    console.log(area);
    return area;
}