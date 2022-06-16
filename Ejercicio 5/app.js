


//Ejercicio 5--Determinar ¿Numeros pares o impares?

let numeros=  [1,6,8,4,2,7,10,3,5];
let pares; 
let impares;

for (let i=0; i<numeros.length; i++){
     if (numeros[i] % 2 === 0 ){
          console.log(`El numero ${numeros[i]} es par`)
     }
     else{
          console.log(`El numero ${numeros[i]} es impar`)
     }
}



