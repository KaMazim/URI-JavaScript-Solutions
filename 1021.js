var input = require('fs').readFileSync('input.txt', 'utf8');
var valor = Number(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");
for (let nota of notas)  {

    let qtd_notas = Math.floor(valor/nota);
    console.log(`${qtd_notas} nota(s) de R$ ${nota},00`);

    valor %= nota;
}

console.log("MOEDAS:");
for (let moeda of moedas) {

    let qtd_moedas = Math.floor(valor/moeda);
    console.log(`${qtd_moedas} moedas(s) de R$ ${moeda.toFixed(2)}`);

    valor %= moeda;
}