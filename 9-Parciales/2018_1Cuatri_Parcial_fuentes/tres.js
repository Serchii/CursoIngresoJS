/*Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;

    precio = prompt("Ingrese el precio del producto");
    porcentaje = prompt("Ingrese el porcentaje de descuento");

    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);

    precioFinal = precio + (precio*porcentaje/100);

    document.getElementById('elPrecioFinal').value=precioFinal;
}
