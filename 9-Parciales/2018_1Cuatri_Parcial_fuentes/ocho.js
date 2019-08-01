/*Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)
*/
function mostrar()
{
    var letra;
    var numero;
    var cantCeros = 0;
    var cantPares = 0;
    var cantImpares = 0;
    var positivos = 0;
    var negativos = 0;
    var cantPos = 0;
    var maxLetra;
    var maxNumero;
    var minLetra;
    var minNumero;
    var contador = 0;
    var mensaje;
    var respuesta;

    do
    {

        mensaje = "ingrese una letra";
        letra = prompt(mensaje);

        mensaje = "ingrese un numero entre -100 y 100";

        do
        {
            numero = prompt(mensaje);
            numero = parseInt(numero);
            mensaje = "dato erroneo, por favor ingrese un numero entre -100 y 100";    
        }
        while(isNaN(numero) || !(numero >= -100 && numero <= 100));

        if(numero==0)
        {
            cantCeros++;
        }
        else if(numero%2 == 0)
        {
            cantPares++;
        } 
        else
        {
            cantImpares++;
        }

        if (numero > 0)
        {
            positivos += numero;
            cantPos++;
        }
        else if(numero < 0)
        {
            negativos += numero;
        }

        if(contador == 0)
        {
            maxLetra = letra;
            maxNumero = numero;
            minLetra = letra;
            minNumero = numero;
        } 
        else if(numero < minNumero)
        {
            minLetra = letra;
            minNumero = numero;
        } 
        else if(numero > maxNumero)
        {
            maxLetra = letra;
            maxNumero = numero;
        }
    
        contador++;

        respuesta = prompt("¿Desea seguir ingresando datos? (ingrese 'no' para finalizar)");
        respuesta = respuesta.toLowerCase();

    }
    while (respuesta != "no");

    document.write("a) La cantidad de números pares es : "+cantPares+"<br>");
    document.write("b) La cantidad de números impares es : "+cantImpares+"<br>");
    document.write("c) La cantidad de ceros es : "+cantCeros+"<br>");
    document.write("d) El promedio de todos los números positivos ingresados es : "+(positivos/cantPos)+"<br>");
    document.write("e) La suma de todos los números negativos es : "+negativos+"<br>");
    document.write("f) El número y la letra del máximo es : "+maxLetra+" "+maxNumero+ " <br>Y del mínimo es : "+minLetra+" "+minNumero);

}
