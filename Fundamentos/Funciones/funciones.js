//Declarar funciones
 
//función sin parámetros
function saludo()
{
    //tarea de la función
    console.log("Hola");
 
}
//Ejecutar la función
saludo(); //no se coloca nada por que no tiene parametros.
 
//Función con parámetros
function operacion(digito1, digito2)
{
    var resultado = digito1 + digito2;
    console.log("resultado", resultado);
}
 
operacion(5, 7);
 
//Función con retorno, "se puede con o sin parámetros"
function retorno1()
{
    var numero = 5;
    return numero;
}
 
console.log(retorno1());
 
//Función con retorno y parámetros
function retorno2(numero)
{
    return numero;
}
console.log(retorno2(10));