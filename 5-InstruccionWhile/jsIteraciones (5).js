//Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.

function mostrar()
{
    var mensaje;
    var sexo; /* = prompt("ingrese f ó m .");
    
    sexo = sexo.toLowerCase();

    while(!(sexo=="f"||sexo=="m")){
        alert("El valor ingresado es incorrecto, intente nuevamente");
        sexo = prompt("ingrese f ó m .");
        sexo = sexo.toLowerCase();
    }*/

    do{
        if(sexo == undefined)
        {
            mensaje = "ingrese f ó m .";   
        }
        else
        {
            mensaje = "El valor ingresado es incorrecto, ingrese f ó m";
        }

        sexo = prompt(mensaje);
        sexo = sexo.toLowerCase();
    }while(!(sexo=="f" || sexo == "m"));

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN