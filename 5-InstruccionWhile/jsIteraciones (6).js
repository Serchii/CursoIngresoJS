//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("El valor ingresado es incorrecto, ingrese un numero");
			numero=parseInt(numero);
		}
		acumulador+=numero;
		contador++;
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN