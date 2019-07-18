/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) 
y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto;
    var legajo;
    var nacionalidad;

    //A.	Edad, entre 18 y 90 años inclusive.

    edad = prompt("Ingrese la edad (rango entre 18 y 90 inclusive)");
    edad = parseInt(edad);

    while(isNaN(edad) || !(edad >=18 && edad <=90))
    {
        edad = prompt("Valor incorrecto. Por favor, ingrese la edad (rango entre 18 y 90 inclusive)");
        edad = parseInt(edad);
    }

    //B.	Sexo, “M” para masculino y “F” para femenino

    sexo = prompt("Ingrese su sexo (M o F)");
    sexo = sexo.toUpperCase();

    while(!(sexo == "M" || sexo == "F"))
    {
        sexo = prompt("Valor incorrecto. Por favor ingrese su sexo (M o F)");
        sexo = sexo.toUpperCase();
    }

    //C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos

    estadoCivil = prompt("Ingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");

    while(!(estadoCivil > 0 && estadoCivil < 5))
    {
        estadoCivil = prompt("Valor incorrecto. Por favor reingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");
    }

    switch (estadoCivil)
    {
        case "1":
            estadoCivil = "soltero/a";
            break;
        case "2":
            estadoCivil = "casado/a";
            break;
        case "3":
            estadoCivil = "divorciado/a";
            break;
        case "4":
            estadoCivil = "viudo/a";
            break;
    }

    //D.	Sueldo bruto, no menor a 8000.

    sueldoBruto = prompt("Ingrese el sueldo bruto (a partir de $8000)");
    sueldoBruto = parseInt(sueldoBruto);

    while(isNaN(sueldoBruto) || sueldoBruto < 8000)
    {
        sueldoBruto = prompt("El valor ingresado es invalido. Por favor ingrese el sueldo bruto (a partir de $8000)");
        sueldoBruto = parseInt(sueldoBruto);
    }

    //E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.

    legajo = prompt("Ingrese su numero de legajo");
    legajo = parseInt(legajo);

    while(isNaN(legajo) || !(legajo >= 1000 && legajo <= 9999))
    {
        legajo = prompt("Valor invalido. Por favor ingrese su numero de legajo");
        legajo = parseInt(legajo);
    }

    //F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

    nacionalidad = prompt("Ingrese la nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
    nacionalidad = nacionalidad.toUpperCase();

    while((nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"))
    {
        nacionalidad = prompt("Valor invalido. Por favor ingrese la nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
        nacionalidad = nacionalidad.toUpperCase();
    }

    document.getElementById('Edad').value = edad;
    document.getElementById('Sexo').value = sexo;
    document.getElementById('EstadoCivil').value = estadoCivil;
    document.getElementById('Sueldo').value = sueldoBruto;
    document.getElementById('Legajo').value = legajo;
    document.getElementById('Nacionalidad').value = nacionalidad;

}
