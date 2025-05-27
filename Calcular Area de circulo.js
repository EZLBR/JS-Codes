var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(t){return lines.shift()}
var Raio = parseFloat(prompt("Insira o Raio"))
var Area = 3.14159*Raio**2

console.log("A="+Area.toFixed(4))