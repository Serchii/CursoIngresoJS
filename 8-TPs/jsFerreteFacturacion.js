/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var PrecioFinal;

    PrecioUno = document.getElementById('PrecioUno').value;
    PrecioDos = document.getElementById('PrecioDos').value;
    PrecioTres = document.getElementById('PrecioTres').value;

    PrecioUno = parseInt(PrecioUno);
    PrecioDos = parseInt(PrecioDos);
    PrecioTres = parseInt(PrecioTres);

    PrecioFinal = PrecioUno + PrecioDos + PrecioTres;

    alert("La suma de los precios es: "+PrecioFinal);

}
function Promedio () 
{
	var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var PrecioFinal;

    PrecioUno = document.getElementById('PrecioUno').value;
    PrecioDos = document.getElementById('PrecioDos').value;
    PrecioTres = document.getElementById('PrecioTres').value;

    PrecioUno = parseInt(PrecioUno);
    PrecioDos = parseInt(PrecioDos);
    PrecioTres = parseInt(PrecioTres);

    PrecioFinal = (PrecioUno+PrecioDos+PrecioTres)/3;

    alert("El promedio es: "+PrecioFinal);

}
function PrecioFinal () 
{
	var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var PrecioFinal;

    PrecioUno = document.getElementById('PrecioUno').value;
    PrecioDos = document.getElementById('PrecioDos').value;
    PrecioTres = document.getElementById('PrecioTres').value;

    PrecioUno = parseInt(PrecioUno);
    PrecioDos = parseInt(PrecioDos);
    PrecioTres = parseInt(PrecioTres);

    PrecioFinal = (PrecioUno+PrecioDos+PrecioTres)*1.21;

    alert("El precio final es: "+PrecioFinal);
}