/**
 * Author: Profit Coder
 * Date: 28/10/2026
 */

var resultadoTotal = 0;

let respuesta = document.getElementById("Solution");

let cero = document.getElementById("0");
let uno = document.getElementById("1");
let dos = document.getElementById("2");
let tres = document.getElementById("3");
let cuatro = document.getElementById("4");
let cinco = document.getElementById("5");
let seis = document.getElementById("6");
let siete = document.getElementById("7");
let ocho = document.getElementById("8");
let nueve = document.getElementById("9");

let mas = document.getElementById("plus");
let menos = document.getElementById("less");
let por = document.getElementById("por");
let entre = document.getElementById("entre");
let punto = document.getElementById("punto");
let letraC = document.getElementById("C");
let igual = document.getElementById("SolutionBtn");

let primerNumero = 0;
let operacion = "";

letraC.addEventListener("click",borrarConsol);
igual.addEventListener("click",mostrarResultado);
cero.addEventListener("click",mostrarCaracter);
uno.addEventListener("click",mostrarCaracter);
dos.addEventListener("click",mostrarCaracter);
tres.addEventListener("click",mostrarCaracter);
cuatro.addEventListener("click",mostrarCaracter);
cinco.addEventListener("click",mostrarCaracter);
seis.addEventListener("click",mostrarCaracter);
siete.addEventListener("click",mostrarCaracter);
ocho.addEventListener("click",mostrarCaracter);
nueve.addEventListener("click",mostrarCaracter);

mas.addEventListener("click", guardarOperacion);
menos.addEventListener("click", guardarOperacion);
por.addEventListener("click", guardarOperacion);
entre.addEventListener("click", guardarOperacion);
punto.addEventListener("click", mostrarPunto);

//Funcion para poder borrar el resultado de la calculadora
function borrarConsol()
{
    respuesta.innerHTML = " ";
    primerNumero = 0;
    resultadoTotal = 0;
    operacion = " ";
}

function mostrarResultado()
{
     let segundoNumero = Number(respuesta.innerHTML);

    switch (operacion)
    {
        case "plus":
            resultadoTotal = primerNumero + segundoNumero;
            break;

        case "less":
            resultadoTotal = primerNumero - segundoNumero;
            break;

        case "por":
            resultadoTotal = primerNumero * segundoNumero;
            break;

        case "entre":
            if (segundoNumero === 0)
            {
                respuesta.innerHTML = "No se puede dividir entre 0";
            }

            resultadoTotal = primerNumero / segundoNumero;
            break;
        
            default: 
                respuesta.innerHTML = "";
    }

    operacion = "";
    return respuesta.innerHTML = resultadoTotal;
}

function mostrarCaracter(e)
{
    var devuelto = 0;

    switch(e.currentTarget)
    {
        case cero: { 
            devuelto = "0"; break; 
        }
        
        case uno: { 
            devuelto = "1"; break; 
        }
        
        case dos: { 
            devuelto = "2"; break; 
        }
        
        case tres: { 
            devuelto = "3"; break; 
        }
        
        case cuatro: { 
            devuelto = "4"; break; 
        }
        
        case cinco: { 
            devuelto = "5"; break; 
        }
        
        case seis: { 
            devuelto = "6"; break; 
        }
        
        case siete: { 
            devuelto = "7"; break; 
        }
        
        case ocho: { 
            devuelto = "8"; break; 
        }
        
        case nueve: { 
            devuelto = "9"; break; 
        }
        
        default: { 
            devuelto = "SINVALOR" 
        };
    }

    return respuesta.innerHTML += devuelto;

}

function guardarOperacion(e)
{
    primerNumero = Number(respuesta.innerHTML);
    operacion = e.currentTarget.id;
    respuesta.innerHTML = "";
}

function mostrarPunto()
{
    if (!respuesta.innerHTML.includes("."))
    {
        respuesta.innerHTML += ".";
    }
}