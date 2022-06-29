/*################################################################################################
El caballo de mac es mas oscuro que el de smith, pero mas rapido y mas viejo que el de jack,
que es aun mas lento que el de willy, que es mas joven que el de mac, que es mas viejo que el de
Smith que es mas claro que el de Willy, aunque el de jack es mas lento y oscuro que el de Smith ¿ Cual es
el mas viejo, cual es el mas lento y cual es el mas claro?

Mac | edad: viejo(2) | velocidad: rapido(2) | tono: oscuro(2)
Smith | edad: joven(1) | velocidad: rapido(2) | tono: claro(1)
Jack | edad: joven(1) | velocidad: lento(1) | tono: oscuro(2)
Willy | edad: joven(1) | velocidad: rapido(2) | tono: oscuro(2)

###############################################################################*/



var b= {

    Mac: {edad:0, velocidad:0, tono:0},
    Smith: {edad:0, velocidad:0, tono:0},
    Jack: {edad:0, velocidad:0, tono:0},
    Willy: {edad:0, velocidad:0, tono:0},


    resultado: function(){

        if(b.Mac.tono > b.Smith.tono &&
            b.Mac.velocidad > b.Jack.velocidad &&
            b.Mac.edad > b.Jack.edad &&
            b.Willy.velocidad > b.Jack.velocidad &&
            b.Mac.edad> b.Willy.edad &&
            b.Mac.edad> b.Smith.edad &&
            b.Willy.tono > b.Smith.tono &&
            b.Smith.velocidad > b.Jack.velocidad &&
            b.Jack.tono > b.Smith.tono){

                return true;


            }

            return false;

    },
    intervalo: setInterval(function(){

        b.Mac.edad = Math.ceil(Math.random()*2)//numeros del 1 al 2
        b.Mac.velocidad= Math.ceil(Math.random()*2)
        b.Mac.tono= Math.ceil(Math.random()*2)

        b.Jack.edad = Math.ceil(Math.random()*2)//numeros del 1 al 2
        b.Jack.velocidad= Math.ceil(Math.random()*2)
        b.Jack.tono= Math.ceil(Math.random()*2)

        b.Smith.edad = Math.ceil(Math.random()*2)//numeros del 1 al 2
        b.Smith.velocidad= Math.ceil(Math.random()*2)
        b.Smith.tono= Math.ceil(Math.random()*2)

        b.Willy.edad = Math.ceil(Math.random()*2)//numeros del 1 al 2
        b.Willy.velocidad= Math.ceil(Math.random()*2)
        b.Willy.tono= Math.ceil(Math.random()*2)



        if(b.resultado()){

            clearInterval(b.intervalo);
            console.log("Caballo mac", b.Mac)
            console.log("Caballo smith", b.Smith)
            console.log("Caballo jack", b.Jack)
            console.log("Caballo Willy", b.Willy)

        }

    },1)

}