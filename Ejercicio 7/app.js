


//Ejercicio 7--Crear una funcion que reciba 3 argumentos numericos (a,b,c), la función se debe de llamar max, la funcion debe de determinar cual es el mayor de los 3 numeros y retornalo...

function max (a, b, c){
  
  let mayor; 
   
   if (( a > b)&& (a>c )){
        mayor = a; 
       }else if (( b > a)&& (b>c )){
        mayor = b;
       }
    else{
         mayor = c;
   }

  return mayor;
}

let mayor  = max(8,2,1);
console.log (mayor);

