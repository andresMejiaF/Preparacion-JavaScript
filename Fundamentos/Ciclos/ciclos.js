//Ciclos
//for
var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);
 
for (var i = 0; i < cajas.length; i++) {

    cajas[i].style.width = "200px";
    cajas[i].style.height = "200px";
    cajas[i].style.background = "green";
    cajas[i].style.marginTop = "5px";
    cajas[i].style.marginRight = "5px";
    cajas[i].style.float = "left";
}
 
for(var i=1; i<=5; i++)
{
    console.log("i", i);
}
 
//while
var n=1;
while (n<=5)
{
    console.log("n", n);
    n++;
}
 
//do while "mientras p sea menos o igual a 5"
var p=1;
do {
    console.log("p", p);
    p++;
} while (p <= 5);

