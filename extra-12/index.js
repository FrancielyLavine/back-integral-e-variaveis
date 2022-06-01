let montante = 90000;
let capital = 60000;
let nPeriodos = 24;
let expoente = 1/nPeriodos;
let taxa = Math.pow(montante/capital, expoente) - 1;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxa}%, pois após ${nPeriodos} meses você teve que pagar ${montante} reais`);