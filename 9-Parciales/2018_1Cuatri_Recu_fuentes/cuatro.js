/* Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/

function mostrar()
{
    var valor1;
    var valor2;
    var resultado;

    valor1 = prompt("Ingrese un numero.");
    valor2 = prompt("Ingrese otro numero.");

    if(valor1==valor2)
    {
        resultado = valor1+valor2;
        alert(resultado);
    }
    else if (valor1>valor2)
    {
        valor1=parseInt(valor1);
        valor2=parseInt(valor2);
        resultado=valor1/valor2;
        alert(resultado);
    }
    /*else
    {

        valor1=parseInt(valor1);
        valor2=parseInt(valor2);

        resultado=valor1+valor2;
        alert(resultado);
    }

    if(resultado > 50)
    {
        alert("La suma es "+resultado+" y es menor a 50.");
    }*/
}
