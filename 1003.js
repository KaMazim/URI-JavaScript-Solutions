var input = (require('fs').readFileSync('/dev/stdin', 'utf8')).split('\n');
var A = input.shift();
var A = Number(A);
var B = Number(input[0]);
var SOMA = A + B;
console.log(`SOMA = ${SOMA}`);