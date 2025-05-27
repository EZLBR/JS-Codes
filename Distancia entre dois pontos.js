var[x1,y1] = prompt("entre com x e y").split(' ').map(Number)
var[x2,y2] = prompt("entre com x e y").split(' ').map(Number)

var dist = (((x2-x1)**2) + ((y2-y1)**2))**0.5

console.log(dist.toFixed(4))