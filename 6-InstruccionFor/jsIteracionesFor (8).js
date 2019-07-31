function mostrar()
{
    var numero = prompt("ingrese un numero");
    var mensaje = "Es un numero primo";

    for(i = 2; i < numero; ++i){
        if(numero%i == 0){
            mensaje = "NO es un numero primo";
            break;
        }
    }

    alert(mensaje);


}//FIN DE LA FUNCIÓN