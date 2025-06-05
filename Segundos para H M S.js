var Segundos = parseInt(prompt(""))
var Horas= parseInt(Segundos/3600)
Segundos = Segundos%3600
var Minutos = parseInt(Segundos/60)
Segundos = Segundos%60
console.log(Horas+":"+Minutos+":"+Segundos)