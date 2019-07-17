//Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta == "si")
	{
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("El valor ingresado es incorrecto. Ingrese un numero");
			numero=parseInt(numero);
		}
		acumulador+=numero;
		respuesta=prompt("ingrese 'si' si desea ingresar otro numero");

	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN