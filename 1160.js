var input = require('fs').readFileSync('input.txt', 'utf8');
var a = input.split(/[\s,]+/);
a = a.map(Number);

var cases = a.shift();

while (cases > 0) {
    var year = 0;

    PA = a.shift();
    PB = a.shift();
    G1 = a.shift();
    G2 = a.shift();

    while (PA <= PB && year < 102) {
        PA *= (1 + G1/100);
        PA = Math.floor(PA);
        PB *= (1 + G2/100);
        PB = Math.floor(PB);
        year += 1;
    }
    
    if (year <= 100) {
        console.log(`${year} anos.`);
    } else {
        console.log(`Mais de 1 seculo.`);
    }
    cases -= 1;
}