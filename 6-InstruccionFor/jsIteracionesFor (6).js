function mostrar()
{   
    var cantPares = 0;
    var numero = prompt("Ingrese cuantas veces quiere que se repita");

    for(i=1;i<=numero;i++){

        if(i%2==0){
            console.log(i);
            cantPares ++;
        }

    }

    console.log("La cantidad de numeros pares es de : "+cantPares);

    



}//FIN DE LA FUNCIÓN