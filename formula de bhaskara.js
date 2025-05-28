var [A, B, C] = prompt("").split(' ').map(Number)

if(A==0){
    console.log("Impossivel calcular")
}
else{
    delta = (B**2)-(4*A*C)
    if(delta<0){
        console.log("Impossivel calcular")
    }
    else{
       var raiz1 = (-B+Math.sqrt(delta))/(2*A)
       var raiz2 = (-B-Math.sqrt(delta))/(2*A)
       console.log("R1 = "+raiz1.toFixed(5))
       console.log("R2 = "+raiz2.toFixed(5))
    }
}