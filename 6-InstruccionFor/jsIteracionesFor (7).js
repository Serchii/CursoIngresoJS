function mostrar()
{
    var cantDiv = 0;
    var numero = prompt("Ingrese un numero");

    for(i = 1; i < numero; ++i){
        if(numero%i==0){
            console.log(i);
            cantDiv ++;
        }
    }

    console.log("La cantidad de numeros divisores es de : "+cantDiv);



}//FIN DE LA FUNCIÓN