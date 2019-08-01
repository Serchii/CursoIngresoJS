/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e 
informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )

*/
function mostrar()
{
    var producto;
    var peso;
    var temperatura;
    var mensaje;
    var tempPares = 0;
    var maxPeso;
    var cantTempBajoCero = 0;
    var cantProducto = 0;
    var minPeso;
    var respuesta;
    var maxProd;
    var acumPeso = 0;

    do
    {
        //Pido la marca
        mensaje = "ingrese la marca del producto"; 
        producto = prompt(mensaje);

        //Pido el peso y valido entre 1 y 100
        mensaje = "ingrese el peso del producto (entre 1 y 100)"; 
        
        do
        {
            peso = prompt(mensaje);
            peso = parseInt(peso);
            mensaje = "dato incorrecto, por favor ingrese el peso (entre 1 y 100)";
        }
        while(isNaN(peso) || !(peso >= 1 && peso <= 100));

        //Pido la temperatura y valido entre -30 y 30
        mensaje = "ingrese la temperatura de almacenamiento del producto (entre -30 y 30)";
        
        do
        {
            temperatura = prompt(mensaje);
            temperatura = parseInt(temperatura);
            mensaje = "dato incorrecto, por favor ingrese la temperatura (entre -30 y 30)";
        }
        while(isNaN(temperatura) || !(temperatura >= -30 && temperatura <= 30));

        //Cuento temperaturas pares
        if(temperatura%2 == 0)
        {
            tempPares++;
        }

        //Peso maximo y minimo
        if(cantProducto == 0)
        {
            maxProd = producto;
            maxPeso = peso;
            minPeso = peso;
        }
        else if(peso > maxPeso)
        {
            maxProd = producto;
            maxPeso = peso;
        }
        else if(peso < minPeso)
        {
            minPeso = peso;
        }

        //Contar productos con temperatura menor a cero
        if(temperatura < 0)
        {
            cantTempBajoCero++;
        }

        //Cuento cantidad y sumo el peso
        cantProducto++;
        acumPeso += peso;

        //Pregunto si desea continuar
        respuesta = prompt("¿Desea ingresar otro producto? (ingrese 'no' para finalizar)");
        respuesta = respuesta.toLowerCase();

    }
    while(respuesta != "no");

    //Muestro con document.write
    document.write("a) La cantidad de temperaturas pares es : " + tempPares + "<br>");
    document.write("b) La marca del producto más pesado es : " + maxProd + "<br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados es : " + cantTempBajoCero + "<br>");
    document.write("d) El promedio del peso de todos los productos es : " + (acumPeso/cantProducto) + "<br>");
    document.write("f) El peso máximo es : " + maxPeso +" Y el mínimo es : " + minPeso + "<br>");

}
