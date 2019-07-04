// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive


function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;

	random = Math.floor((Math.random() * 10) + 1);

	alert(random);
	
}//FIN DE LA FUNCIÓN