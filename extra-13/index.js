let raio = 3;
let altura = 5;
let areaBase = 2*Math.PI * Math.pow(raio,2);
let areaLateral = 2*Math.PI *altura*raio;
let areaTotal = 2*areaBase + areaLateral;

console.log(areaTotal);