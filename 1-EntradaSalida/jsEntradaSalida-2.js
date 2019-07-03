/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    /*Al presionar el botón 'mostrar' 
debemos lograr tomar un dato por 'PROMPT' 
y luego mostrarlo por 'ALERT'.*/

// Ej: https://www.w3schools.com/jsref/met_win_prompt.asp

/*
Para declarar una variable se utiliza la palabra "var" antes del nombre de la variable

Ej: var nombre
    nombre = "Maria"
	
    */

    var nombre;

    nombre = prompt("ingresa tu nombre", "natalia natalia");

    alert("su nombre es : "+nombre);

/* Para entrada como ventana emergente tenemos prompt();
para salida alert();
*/

}

