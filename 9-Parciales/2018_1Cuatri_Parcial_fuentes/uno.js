/*Bienvenidos. 
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese el ancho del rectangulo");
    largo = prompt("Ingrese el largo del rectangulo");

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    perimetro = (largo+ancho)*2;

    alert("El perimetro del rectangulo es : "+perimetro);
}
