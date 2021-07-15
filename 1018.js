var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = Number(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);
for (let nota of notas)  {

    let qtd_notas = Math.floor(valor/nota);
    console.log(`${qtd_notas} nota(s) de R$ ${nota},00`);

    valor %= nota;
}