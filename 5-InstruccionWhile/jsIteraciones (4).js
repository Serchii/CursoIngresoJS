//al presionar el botón pedir un número entre 0 y 9 inclusive.

function mostrar()
{
	var mensaje;
	var numero; /*= prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while (!(numero >=0 && numero <=9) || isNaN(numero)){
		alert("el valor ingresado es incorrecto, ingrese nuevamente");
		numero = prompt("ingrese un número entre 0 y 9.");
		numero = parseInt(numero);
	}
*/

	do{
		if(numero == undefined){
			mensaje = "ingrese un número entre 0 y 9.";
		}
		else
		{
			mensaje = "el valor ingresado es incorrecto, ingrese un número entre 0 y 9.";
		}
		numero = prompt(mensaje);
		numero = parseInt(numero);
	}while(!(numero >=0 && numero <=9) || isNaN(numero));

	document.getElementById('Numero').value = numero;


/* validar que sea un numero

var == NaN
isNaN(var)


*/
}//FIN DE LA FUNCIÓN