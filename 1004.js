var input = (require('fs').readFileSync('/dev/stdin', 'utf8')).split('\n');
var PROD = Number(input[0]) * Number(input[1]);
console.log(`PROD = ${PROD}`);