var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var R = Number(input);
const n = 3.14159;
var A = n * Math.pow(R, 2);
var A = A.toFixed(4);
console.log(`A=${A}`);