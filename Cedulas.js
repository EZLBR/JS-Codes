var x = parseInt(prompt(""))
console.log(x)
var nota_cem = parseInt(x/100)
x = x%100
var nota_cinq = parseInt(x/50)
x = x%50
var nota_vinte = parseInt(x/20)
x = x%20
var nota_dez = parseInt(x/10)
x = x%10
var nota_cinco = parseInt(x/5)
x = x%5
var nota_dois = parseInt(x/2)
x = x%2
var nota_um = x%2

console.log(nota_cem +" nota(s) de R$ 100,00")
console.log(nota_cinq +" nota(s) de R$ 50,00")
console.log(nota_vinte +" nota(s) de R$ 20,00")
console.log(nota_dez +" nota(s) de R$ 10,00")
console.log(nota_cinco +" nota(s) de R$ 5,00")
console.log(nota_dois +" nota(s) de R$ 2,00")
console.log(nota_um +" nota(s) de R$ 1,00")