//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
//tomo la edad  

/*
    var edad;

    edad = document.getElementById('edad').value;

    edad = parseInt(edad);

    if (edad >17 || edad <13){

        alert("No eres adolescente");

    }
*/
/*  Y: se escribe &&
    O: se escribe ||
*/

    var precio;
    
    precio = document.getElementById('edad').value;

    if(precio < 25) 
    {
        alert("barato");
    } 
    else if (precio > 75)
    {
        alert("caro");
    }
    else
    {
        alert("bien");
    }



}//FIN DE LA FUNCIÓN