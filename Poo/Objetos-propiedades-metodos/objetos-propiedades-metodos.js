//Objetos: Colección de propiedades y métodos
var object = {
    //Propiedad es asociación entre nombre y valor
    nombre: "Jaime",
    edad: 31,
    //Método es una función dentro de un objeto
    descripcion: function()
        {
            console.log("Su nombre es " +this.nombre+" Y tiene "+object.edad+" años.");
        },
    saludar: function(saludo)
    {
        console.log(saludo+" "+object.nombre);
    }    
}
console.log("Nombre", object.nombre);
console.log("Edad", object.edad);
object.descripcion();
object.saludar("Hola");
 
//Objetos Primitivos
var d  = new Date()
console.log("d", d);

var y = d.getFullYear();
console.log("y", y);