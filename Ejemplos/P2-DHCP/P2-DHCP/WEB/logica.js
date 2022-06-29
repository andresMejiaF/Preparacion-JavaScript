var boton = document.getElementById("ejecutar");
var mensaje = document.getElementById("mensaje") ,String;
var dhcp = new Array();
var saltos=2;
boton.addEventListener('click', function(){
    ejecutar();
});

function ejecutar (){

    
    var copy= mensaje.value;
   
    
    dhcp= copy.split(' ').join(',').split('\n').join(',').split(',');
    console.log(dhcp);  
    
    encabezadoFrame();
    datagramaIP();
    encabezadoSegmentoUDP();
    mensajeDhcp();
    ipClienteEnMsg();
    suDireccionIP();
    direccionHardware();
    
}

function segmentar (inicio, fin, arreglo){
    var segmento= new Array() ;
    var aux = 0;
    for (inicio; inicio <= fin; inicio++) {       
        segmento[aux]=arreglo[inicio];  
        aux++;          
    }
   
    return segmento;
}

function encabezadoFrame (){
    //FRAME ENCABEZADO
    var encabezadoFrame = new Array();    
    encabezadoFrame = segmentar(0, 13, dhcp);

        //DIRECCION MAC DESTINO
        var direccionMacDestino = new Array();    
        direccionMacDestino= segmentar(0, 5, encabezadoFrame);
        console.log(direccionMacDestino);
        var cadenadmd = direccionMacDestino.join('-');   
        console.log(cadenadmd);
        const macDestino= document.getElementById('mac-destino');
        macDestino.value = cadenadmd;    
        //DIRECCION MAC ORIGEN
        var direccionMacOrigen = new Array();    
        direccionMacOrigen= segmentar(6, 11, encabezadoFrame);
        console.log(direccionMacOrigen);
        var cadenadmo = direccionMacOrigen.join('-');   
        console.log(cadenadmo);
        const macOrigen= document.getElementById('mac-origen');
        macOrigen.value= cadenadmo;
}

function datagramaIP(){
    //DATAGRAMA IP
    var datagramaIp = new Array();    
    datagramaIp = segmentar(14, 33, dhcp);

        //DIRECCION IP ORIGEN
        var direccionIpOrigen = new Array();    
        direccionIpOrigen= segmentar(12, 15, datagramaIp);
        console.log(direccionIpOrigen);
        var auxiliar="";
        var numero = 0;
        for (let index = 0; index < direccionIpOrigen.length; index++) {
            if (index!=0) {
                auxiliar+=".";
            }
            numero = parseInt(direccionIpOrigen[index],16); 
            auxiliar+=numero;
        }

        console.log(auxiliar);
        const ipOrigen= document.getElementById('ip-origen');
        ipOrigen.value = auxiliar; 

        //DIRECCION IP DESTINO
        var direccionIpDestino = new Array();    
        direccionIpDestino= segmentar(16, 19, datagramaIp);
        console.log(direccionIpDestino);
        var auxiliar2="";
        var numero2 = 0;
        for (let index = 0; index < direccionIpDestino.length; index++) {
            if (index!=0) {
                auxiliar2+=".";
            }
            numero2 = parseInt(direccionIpDestino[index],16); 
            auxiliar2+=numero2;
        }

        console.log(auxiliar2);
        const ipDestino= document.getElementById('ip-destino');
        ipDestino.value = auxiliar2; 
}


function mensajeDhcp(){
    
    var mensajeDHCP = new Array();    
    mensajeDHCP = segmentar(42, dhcp.length, dhcp);
    //TIPO DE MENSAJE DHCP
    var mensaje="";
    var tipo=0;
    tipo= parseInt(mensajeDHCP[0], 16);
    if (tipo==1) {
        mensaje="Mensaje DHCP de solicitud";
        const tipoMens= document.getElementById('tipo-msj-dhcp');
        tipoMens.value = mensaje; 
    }else{
        mensaje="Mensaje DHCP de respuesta";
        const tipoMens= document.getElementById('tipo-msj-dhcp');
        tipoMens.value = mensaje; 
    }

    //TPO DE HARDWARE DE RED
    var mensaje="";
    var tipo=0;
    tipo= parseInt(mensajeDHCP[1], 16);
    if (tipo==1) {
        mensaje="Hardware de red Ethernet";
        const tipoMens= document.getElementById('hardware-red');
        tipoMens.value = mensaje; 
    }else{
        mensaje="Hardware de red 802.11";
        const tipoMens= document.getElementById('hardware-red');
        tipoMens.value = mensaje; 
    }

    //TAMAÑO DE LA DIRECCION DE HARDWARE

    var mensaje="";
    var tipo=0;
    tipo= parseInt(mensajeDHCP[2], 16);

    mensaje = "0x"+mensajeDHCP[2]+": "+ tipo +" bytes";
   
       
    const mensaj= document.getElementById('tam-direc-hardware');
    mensaj.value = mensaje; 

    //IDENTIFICADOR DE LA TRANSACCION

    var identTransaccion = segmentar(4, 7, mensajeDHCP);
    var respuesta= identTransaccion.join("");
    const Transmensaj= document.getElementById('ident-transaccion');
    Transmensaj.value = respuesta; 
  

}

function encabezadoSegmentoUDP(){
     //DATAGRAMA IP
     var encabezadoSegUDP = new Array();    
     encabezadoSegUDP = segmentar(34, 41, dhcp);

     console.log(encabezadoSegUDP);
    
        //PUERTO ORIGEN
        var puertoOrigen = new Array();    
        puertoOrigen= segmentar(0, 1, encabezadoSegUDP);
        console.log(puertoOrigen);
        var auxiliar="";
        var numero;
        for (let index = 0; index < puertoOrigen.length; index++) {
          auxiliar += puertoOrigen[index];
        }
        numero= parseInt(auxiliar, 16);

        console.log(numero);
        const portOrigen= document.getElementById('puerto-origen');
        portOrigen.value = numero; 

        //PUERTO DESTINO
        var puertoDestino = new Array();    
        puertoDestino= segmentar(2, 3, encabezadoSegUDP);
        console.log(puertoDestino);
        var auxiliar="";
        var numero;
        for (let index = 0; index < puertoDestino.length; index++) {
            auxiliar += puertoDestino[index];
        }
        numero= parseInt(auxiliar, 16);
        console.log(numero);
        const portDestino= document.getElementById('puerto-destino');
        portDestino.value = numero;

        //LONGITUD SEGMENTO UDP
        var longSegUDP = new Array();    
        longSegUDP= segmentar(4, 5, encabezadoSegUDP);
        console.log(longSegUDP);
        var auxiliar="";
        var numero= 0;
        for (let index = 0; index < longSegUDP.length; index++) {
            auxiliar += longSegUDP[index];
        }
        
        numero= parseInt(auxiliar, 16);
        auxiliar = numero ;
        auxiliar+=" bytes";
        console.log(auxiliar);
        const longSeg= document.getElementById('longitud-segmento-udp');
        longSeg.value = auxiliar;

        //LONGITUD DHCP
        var longdhcp = numero - 8;
        longdhcp  += " bytes";
        console.log(longdhcp);
        const longituddhcp= document.getElementById('longitud-msj-dhcp');
        longituddhcp.value = longdhcp;
}

function ipClienteEnMsg(){
     //DIRECCION IP CLIENTE AL MOMENTO DE ENVIAR EL MENSAJE
     var ipClienteMsg = new Array();    
     ipClienteMsg= segmentar(54, 57, dhcp);
     console.log(ipClienteMsg);
     var auxiliar="";
     var numero= 0;

     for (let index = 0; index < ipClienteMsg.length; index++) {
        if (index!=0) {
            auxiliar+=".";
        }
        numero = parseInt(ipClienteMsg[index],16); 
        auxiliar+=numero;
    }
     console.log(auxiliar);
     const ipClientmsg= document.getElementById('ip-cliente');
     ipClientmsg.value = auxiliar;
}

function suDireccionIP(){
    //DIRECCION IP CLIENTE AL MOMENTO DE ENVIAR EL MENSAJE
    var ipPropia = new Array();    
    ipPropia= segmentar(58, 61, dhcp);
    console.log(ipPropia);
    var auxiliar="";
    var numero= 0;

    for (let index = 0; index < ipPropia.length; index++) {
       if (index!=0) {
           auxiliar+=".";
       }
       numero = parseInt(ipPropia[index],16); 
       auxiliar+=numero;
   }
    console.log(auxiliar);
    const suIp= document.getElementById('ip-personal');
    suIp.value = auxiliar;
}

function direccionHardware(){
    //DIRECCION IP CLIENTE AL MOMENTO DE ENVIAR EL MENSAJE
    var direccionhardware = new Array();    
    direccionhardware= segmentar(70, 85, dhcp);
    console.log(direccionhardware);
    var auxiliar="";
    var numero= 0;

    for (let index = 0; index < direccionhardware.length; index++) {
       if (index!=0) {
           auxiliar+="-";
       }
       
       auxiliar+=direccionhardware[index];
   }
    console.log(auxiliar);
    const direcHW= document.getElementById('hardware-cliente');
    direcHW.value = auxiliar;
}



