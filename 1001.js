var input = (require('fs').readFileSync('/dev/stdin', 'utf8')).split('\n');
var A = Number(input[0]);
var B = Number(input[1]);
var X = A + B;
console.log(`X = ${X}`);