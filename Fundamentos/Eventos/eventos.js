    var recuadro = document.querySelector("#recuadro");
    
    //Eventos desde dom
    function cambiarColor()
    {
        recuadro.style.background = "red";
    }
    
    //Eventos desde Javascript
    var boton = document.querySelector("#boton");
    boton.addEventListener("click", moverCaja);
    
    function moverCaja()
    {
        recuadro.style.width = "1000px";    
        recuadro.style.transition = "1s width ease";
    }
