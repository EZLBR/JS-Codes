
var A = parseInt(prompt(""))
var AV1 = new Array(A)
var AV2 = new Array(A)
var Media = new Array(A)
var conta = 0
var rep = 0
for(i=0;i<AV1.length; i++){
    AV1[i] = parseFloat(prompt("Notas AV1"))
    AV2[i] = parseFloat(prompt("Notas AV2"))
    Media[i] = (AV1[i] + AV2[i])/2
    if(i==0){
        var MediaMA = Media[i]
        var MediaME = Media[i]
    }
    else{
        if(Media[i]>MediaMA){
            MediaMA = Media[i]
        }
        if(Media[i]<MediaME){
            MediaME = Media[i]
        }
    }
    
    if(Media[i]>=5){
        conta++
    }
    else{
        rep++
    }

}

console.log("A maior média é: " + MediaMA)
console.log("A Menor média é: " + MediaME)
console.log("Alunos Aprovados: " + conta + " Alunos Reprovados: " + rep)
