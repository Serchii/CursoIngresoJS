function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if(edad >= 13 && edad < 18){

    alert("Eres adolescente");

}

/*  El == se utiliza para comparar el valor de las variables
    El === se utiliza para comparar que valor y el tipo de las variables
*/

}//FIN DE LA FUNCIÓN