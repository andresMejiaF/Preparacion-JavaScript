//Condiciones

//If, Else
var a = 15;
var b = 10;
 
if (a > b)
{
    console.log("A es mayor a B");
} else if(a == b)
{
    console.log("A es igual a B");
} else
{
    console.log("A no es igual ni mayor a B")
}
 
//Cambios (SWITCH)
var dias = "Lunes";
 
switch (dias)
{
    case "Sabado":
        console.log("Voy a estudiar PHP");
        break;
 
    case "Martes":
        console.log("Voy a estudiar HTML");
        break;
       
    case "Domingo":
        console.log("Voy a descansar");
        break;    
 
    default: console.log("Voy a estudiar JAVASCRIPT");
        break;
}
