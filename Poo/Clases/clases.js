/*Clases primitivas (las que son por defecto)
las clases son funciones constructoras y se inician en mayuscula
ejemplo: new String()*/
 
//Clases primitivas, clase String
var string = new String("Esto es un String");
console.log("String", string);
 
//Clase numérica
var number = new Number(12);
console.log("Number", number);
 
//Clase booleana
var boolean = new Boolean(false);
console.log("Boolean", boolean);
 
//Clase Array
var array = new Array("Rojo", "Amarillo", "Verde");
console.log("ArraY", array);
 
//Clase Object
var object = new Object({nombre: "Pepe",
                        edad: 52})
console.log("object", object);
 
/*Clases personalizadas, primero se crea el prototipo, y función constructora*/
function Persona()
{
    //Propiedades públicas
    this.nombre;
    this.edad;
}
 
var yo = new Persona();
yo.nombre = "Jaime";
yo.edad = "38";
console.log("yo", yo);
 
/*Clases con parámetros, método 1 
*/
class Animales {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }
}
 
/*Clases con parámetros, método 2*/
/*
function Animales(nombre, raza)
{
    this.nombre=nombre;
    this.raza=raza;
}
 */

 
var mascota = new Animales("perro", "pitbull");
console.log("mascota", mascota);
