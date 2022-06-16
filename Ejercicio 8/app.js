


//Ejercicio 8--Crear una funcion que reciba como argumento un arreglo, la funcion debe retornar el nombre que tenga mas letras del arreglo.


function masLargo(arr){

  let nombreLargo = '';
     
    for (let i=0; i<arr.length; i++){
       let nombre= arr[i];

       if(nombre.length > nombreLargo.length){
         nombreLargo=nombre;
       }
    }
  return nombreLargo;
}




let heroes = ['Deadpool','Ciclope','Magneto','Profesor Charles Xavier'];

let heroeLargo=masLargo(heroes);

console.log(heroeLargo);// Profesor Charles Xavier