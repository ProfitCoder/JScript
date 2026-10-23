/**
 * 
 * 
 * 
 */

let Eleg = document.getElementById("elegirNum");

const NumAleatorio = Math.floor(Math.random() * 9) + 1;

Eleg.textContent = "Haz clic en el número " + NumAleatorio;

document.addEventListener("click", pulsado);

function pulsado(evento)
{
    if (evento.target.tagName === "BUTTON")
    {
        let numero = Number(evento.target.textContent);
        comprobar(numero);
    }
}

function comprobar(numero)
{
    if (numero === NumAleatorio)
    {
        Eleg.textContent = "¡Correcto!";
    }
    else
    {
        Eleg.textContent = "Incorrecto. Pulsa el número " + NumAleatorio;
    }
}