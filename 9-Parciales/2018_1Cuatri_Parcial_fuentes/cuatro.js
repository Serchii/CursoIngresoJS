/*Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/
function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    if(numeroUno == numeroDos){
        resultado = numeroUno+numeroDos;
    }
    else
    {
        if(numeroUno > numeroDos)
        {
            resultado = numeroUno + numeroDos;
        }
        else
        {
            resultado = numeroUno - numeroDos;
        }
    }

    if(resultado > 10)
    {
        resultado = "La suma es "+resultado+" y es mayor a 10";
    }

    alert(resultado);
}
