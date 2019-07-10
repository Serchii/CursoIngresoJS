/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var Cantidad;
    var Marca;
    var precioDescuento;
    var impuesto;

    Cantidad = document.getElementById('Cantidad').value;
    Marca = document.getElementById('Marca').value;
    
    if(Cantidad >=6){ // Punto A

        precioDescuento = (Cantidad*35)*0.50;

        document.getElementById('precioDescuento').value = precioDescuento;
    }else if (Cantidad == 5){ // Punto B
        if(Marca == "ArgentinaLuz"){
            
            precioDescuento = (Cantidad*35)*0.6;
            document.getElementById('precioDescuento').value = precioDescuento;

        } else {

            precioDescuento = (Cantidad*35)*0.7;
            document.getElementById('precioDescuento').value = precioDescuento;

        }
    } else if (Cantidad == 4){ // Punto C
        if(Marca == "ArgentinaLuz" || Marca == "FelipeLamparas"){
            
            precioDescuento = (Cantidad*35)*0.75;
            document.getElementById('precioDescuento').value = precioDescuento;

        } else {

            precioDescuento = (Cantidad*35)*0.8;
            document.getElementById('precioDescuento').value = precioDescuento;

        }
    } else if (Cantidad == 3){ // Punto D
        if (Marca == "ArgentinaLuz"){

            precioDescuento = (Cantidad*35)*0.85;
            document.getElementById('precioDescuento').value = precioDescuento;

        } else if(Marca == "FelipeLamparas"){

            precioDescuento = (Cantidad*35)*0.9;
            document.getElementById('precioDescuento').value = precioDescuento;

        } else{

            precioDescuento = (Cantidad*35)*0.95;
            document.getElementById('precioDescuento').value = precioDescuento;

        }
    }

    if (precioDescuento > 120){

        impuesto = precioDescuento * 0.10;
        precioDescuento = precioDescuento + impuesto;
        document.getElementById('precioDescuento').value = precioDescuento;
        alert("Usted pagó "+impuesto+" de IIBB.");
    }
}
