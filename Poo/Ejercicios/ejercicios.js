/*
Caso 1 cuatro atletas

de cuatro corredores de atletismo se sabe que  c ha llegado inmediatamente
detras de B, y D ha llegado en medio de A y C. ¿ podria usted calcular el orden de llegada?

B- 1
C- 2
D- 3
A- 4

*/

var a={

    A:0, B:0, C:0, D:0,

    resultado: function(){

        if(a.C > a.B && a.D > a.B && a.D > a.C && a.D<a.A){
            
            return true;
        }
        return false;
    },

    intervalo: setInterval(function(){

        a.A=Math.ceil(Math.random()*4)
        a.B=Math.ceil(Math.random()*4)
        a.C=Math.ceil(Math.random()*4)
        a.D=Math.ceil(Math.random()*4)

        if(a.resultado()){

            //borra el intervalo
            clearInterval(a.intervalo);
            console.log("atleta A ", a.A)
            console.log("atleta B ", a.B)
            console.log("atleta C ", a.C)
            console.log("atleta D ", a.D)
        }

    },10)



}