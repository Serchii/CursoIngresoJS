function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById('edad').value;

    edad = parseInt(edad);


/*
    if (edad < 13){

        alert("Eres un niño");

    } 
    
    else if (edad < 18){

        alert("Eres un adolescente");

    }

    else {

        alert("Eres adulto");

    }
*/


    if (edad >=13){

        if (edad >=18){

            alert("Eres un adulto");

        }

        else {

            alert("Eres un adolescente");

        }
    }

    else {

        alert("Eres un niño");

    }
        
        




}//FIN DE LA FUNCIÓN