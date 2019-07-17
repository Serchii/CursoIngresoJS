//al presionar el botón pedir un número entre 0 y 9 inclusive.

function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while (!(numero >=0 && numero <=9) || isNaN(numero)){
		alert("el valor ingresado es incorrecto, ingrese nuevamente");
		numero = prompt("ingrese un número entre 0 y 9.");
		numero = parseInt(numero);
	}

	document.getElementById('Numero').value = numero;


/* validar que sea un numero

var == NaN
isNaN(var)


*/
}//FIN DE LA FUNCIÓN