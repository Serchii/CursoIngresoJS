/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	/*
	*Todas las asignaciones son destructivas*
	
	var numeroUno;

	var numeroDos;

	numeroUno=666;
	//numeroDos=numeroUno; se reasigna un valor a la variable, destruyendo el valor anterior
	numeroUno=numeroDos;

	alert(numeroUno);
	alert(numeroDos);

	*/

	/*
	La entrada y salida de texto tambien puede ser por ID

	Entrada:
	algo = document.getElementById('ejemplo').value;

	Salida:
	document.getElementById('ejemplo').value = algo;
	
	*/

	var dato;

	dato = prompt("Ingrese su nombre aqui");

	document.getElementById('elNombre').value = dato;
	
	
}

