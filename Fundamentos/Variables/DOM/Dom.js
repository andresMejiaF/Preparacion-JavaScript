//Variables DOM ("Modelo de objetos del documento")
/* El DOM es la estructura de objetos que genera el navegador
cuando se carga un documento y se puede alterar mediante javascript
para cambiar dinámicamente los contenidos y aspectos de la página*/
var caja = document.querySelector("#caja");
console.log("caja", caja);
 
/*se puede interactuar con el estilo del html
se pueden crear varias cajas
var cajas = document.querySelectorAll(".cajas");
//una clase se selecciona con .cajas y un id con #cajas
console.log("cajas", cajas);
 
/*Se puede usar style para agregar propiedades*/

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);



caja.style.width = "450px";
caja.style.height = "200px";
caja.style.background = "green";