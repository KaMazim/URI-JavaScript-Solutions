var input = (require('fs').readFileSync('/dev/stdin', 'utf8')).split('\n');
var A = input[0];
var A = Number(A);
var B = input[1];
var B = Number(B);
var MEDIA = ((A*3.5) + (B*7.5))/11;
var MEDIA = MEDIA.toFixed(5);
console.log(`MEDIA = ${MEDIA}`);