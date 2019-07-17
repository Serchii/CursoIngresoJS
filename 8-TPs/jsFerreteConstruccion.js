/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular 
y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo;
    var Ancho;
    
    
    Largo = document.getElementById('Largo').value;
    Ancho = document.getElementById('Ancho').value;

    Largo = parseInt(Largo);
    Ancho = parseInt(Ancho);

    perimetro = (Largo+Ancho)*2;

    alert("Se deben comprar "+perimetro*3+" metros de alambre");


}
function Circulo () 
{
	var Radio;
    var Circunferencia;

    Radio = document.getElementById('Radio').value;

    Circunferencia = 2 * Math.PI * Radio;

    alert("Se deben comprar "+Circunferencia*3+" metros de alambre");

}
function Materiales () 
{
	var Largo;
    var Ancho;
    var Area;

    Largo = document.getElementById('Largo').value;
    Ancho = document.getElementById('Ancho').value;

    Largo = parseInt(Largo);
    Ancho = parseInt(Ancho);

    Area = Largo*Ancho;

    alert("Se necesitaran "+Area*2+" bolsas de cemento y "+Area*3+" de cal");
}