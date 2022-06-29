var tiempo = document.querySelector("#tiempo")

var segundos =0;


/*
Set imtervalo (intervalo de tiempo)
setInterval(funcion, tiempo)
*/
//1000 representa un segundo
var intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML = segundos;
   // console.log("segundos", segundos);
},1000)

/*
Set timeout (retardo de tiempo)
setTimeout(funcion, tiempo)
*/

setTimeout(function(){
   // alert("se cumplio el tiempo")
    clearInterval(intervalo);
}, 5000)
