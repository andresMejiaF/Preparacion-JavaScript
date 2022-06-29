var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero= 0;

/*
Numeros aleatorios

objeto math : Operaciones matematicas en los numeros.

Math.random = devuelve un numero aleatorio entre 0 (inclusive) y 1 (exclusive)

Math.floor = redondea el numero menor del decimal

Math.ceil = redondea al numero maximo del decimal

Math.round = devuelve el valor de x redondeado a su numero entero mas proximo
*/

numero =Math.round ( Math.random() *10);
console.log("numero", numero);
numeroAleatorio.innerHTML= numero;