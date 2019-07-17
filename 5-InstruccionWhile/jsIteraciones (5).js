//Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.

function mostrar()
{

    var sexo = prompt("ingrese f ó m .");
    
    sexo = sexo.toLowerCase();

    while(!(sexo=="f"||sexo=="m")){
        alert("El valor ingresado es incorrecto, intente nuevamente");
        sexo = prompt("ingrese f ó m .");
    }

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN