//Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con solo los números pares utilizando funciones. 
 
function arreglonumerospares(numeros) {
  return numeros.filter(function(numeros) {
    return numeros % 2 == 0; 
  })

} 

let numeros = [23,24,25,26,27,28];

 console.log(arreglonumerospares(numeros))

 



