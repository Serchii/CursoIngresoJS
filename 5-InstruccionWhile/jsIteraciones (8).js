//Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.

function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("El valor ingresado es incorrecto. Ingrese un numero");
			numero=parseInt(numero);
		}
		if(numero<0)
		{
			negativo *= numero;
		}
		else
		{
			positivo += numero;
		}
		contador++;
		
		respuesta = prompt("Ingrese 'si' si desea ingresar otro numero");
		respuesta = respuesta.toLowerCase();
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN