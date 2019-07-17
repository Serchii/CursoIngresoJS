//Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.

function mostrar()
{
	
	var minimo;
	var maximo;
	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("El valor ingresado es incorrecto. Ingrese un numero");
			numero=parseInt(numero);
		}

		if(contador == 0)
		{
			minimo = numero;
			maximo = numero;
		}

		if(numero > maximo)
		{
			maximo = numero;
		} 
		else if(numero < minimo)
		{
			minimo = numero;
		}

		contador++
		
		respuesta = prompt("Si desea dejar de ingresar numeros, ingrese 'no'");
		respuesta = respuesta.toLowerCase();
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN