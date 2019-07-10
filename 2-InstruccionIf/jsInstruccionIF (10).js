/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/


function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota;

	nota = Math.floor((Math.random()*10)+1);

	if (nota > 8){

		alert("Nota: "+nota+"\nEXCELENTE");

	} else if (nota > 3) {

		alert("Nota: "+nota+"\nAPROBÓ");

	} else {

		alert("Nota: "+nota+"\nVamos, la proxima se puede");

	}

}//FIN DE LA FUNCIÓN