/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/

function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var negativos=0;
	var positivos=0;
	var cantPositivos=0;
	var cantNegativos=0;
	var promedioPositivo;
	var promedioNegativo;
	var cantPares=0;
	var cantCeros=0;
	var diferencia;
	var numero;
	var respuesta="si";


	while(respuesta!="no")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("El valor ingresado es incorrecto. Ingrese un numero");
			numero = parseInt(numero);
		}

		if(numero > 0)
		{
			positivos += numero;
			cantPositivos++;
		}
		else if(numero < 0)
		{
			negativos += numero;
			cantNegativos++;
		}
		else
		{
			cantCeros++;
		}

		if(numero%2==0)
		{
			cantPares++;
		}

		respuesta = prompt("¿Desea seguir ingresando numeros? (si/no)");
		respuesta = respuesta.toLowerCase();
	
	}

	if(cantPositivos>cantNegativos)
	{
		diferencia = cantPositivos - cantNegativos;
 	}
	else
	{
		diferencia = cantNegativos - cantPositivos;
	}

	if(cantPositivos == 0)
	{
		promedioPositivo = "---";
	}
	else
	{
		promedioPositivo = positivos/cantPositivos;
	}

	if(cantNegativos == 0)
	{
		promedioNegativo = "---";
	}
	else
	{
		promedioNegativo = negativos/cantNegativos;
	}

	document.write("1. La suma de los negativos es : "+negativos+"<br>");
	document.write("2. La suma de los positivos es : "+positivos+"<br>");
	document.write("3. La cantidad de los positivos es : "+cantPositivos+"<br>");
	document.write("4. La cantidad de los negativos es : "+cantNegativos+"<br>");
	document.write("5. La cantidad de ceros es : "+cantCeros+"<br>");
	document.write("6. La cantidad de números pares es : "+cantPares+"<br>");
	document.write("7. El promedio de los positivos es : "+promedioPositivo+"<br>");
	document.write("8. El promedio de los negativos es : "+promedioNegativo+"<br>");
	document.write("9. La diferencia entre positivos y negativos es de : "+diferencia+"<br>");


}//FIN DE LA FUNCIÓN