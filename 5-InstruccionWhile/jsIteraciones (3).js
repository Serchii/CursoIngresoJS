//al presionar el botón pedir la CLAVE (ayuda: es utn750)


function mostrar()
{

var clave;
var mensaje;

/*while(clave != "utn750"){
    alert('Clave incorrecta, intente nuevamente');
    clave = prompt("ingrese el número clave.");
}*/

do{
    if(clave == undefined)
    {
        mensaje = "ingrese el número clave.";
    }
    else
    {
        mensaje = "Clave incorrecta, intente nuevamente";
    }
    clave = prompt(mensaje);
}while(clave != "utn750");

}//FIN DE LA FUNCIÓN
