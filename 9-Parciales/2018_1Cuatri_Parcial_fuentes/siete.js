/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
    var notas=0;
    var numero;
    var contador=0;
    var sexo;
    var promedio;
    var minNota;
    var minSexo;
    var cantVarones = 0;

    while(contador < 5)
    {

        numero = prompt("Ingrese la nota del alumno");
        numero = parseInt(numero);

        while(isNaN(numero) || !(numero>=0 && numero<=10))
        {
            numero = prompt("Valor invalido. Ingrese la nota del alumno");
            numero = parseInt(numero);
        }

        sexo = prompt("Ingrese el sexo del alumno (m o f)");
        sexo = sexo.toLowerCase();

        while(sexo != "m" && sexo != "f")
        {
            sexo = prompt("Valor invalido. Ingrese el sexo del alumno (m o f)");
            sexo = sexo.toLowerCase();
        }

        notas += numero;

        if(contador == 0)
        {
            minNota = numero;
            minSexo = sexo;
        }
        else if(numero < minNota)
        {
            minNota = numero;
            minSexo = sexo;
        }

        if(numero >= 6 && sexo == "m")
        {
            cantVarones++;
        }


        contador++
    }

    promedio = notas/contador;

    alert("El promedio de las notas totales es : "+promedio);
    alert("La nota más baja es : "+minNota+" y el sexo de esa persona es : "+minSexo);
    alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es : "+cantVarones);
}
