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

    numeroUno = prompt("Ingrese un numero");
    numeroDos = prompt("Ingrese otro numero");


    if(numeroUno == numeroDos){
        resultado = numeroUno+numeroDos;
    }
    else
    {
        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);        
        
        if(numeroUno > numeroDos)
        {
            resultado = numeroUno - numeroDos;
        }
        else
        {
            resultado = numeroUno + numeroDos;
        }
    }

    alert(resultado);
    
    if(resultado > 10)
    {
        alert("la suma es "+resultado+" y supero el 10");
    }

}
