let capital = 5000;
let taxa = 0.065;
let tempo = 2;

let jurosComposto = capital * Math.pow(1 + taxa, tempo);

console.log (jurosComposto);