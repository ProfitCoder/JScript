let circulo = document.getElementById("circulo");
let resultado = document.getElementById("resultado");

let verde = false;
let temporizador;

function empezar()
{
    verde = false;
    circulo.style.backgroundColor = "gray";

    // Tiempo aleatorio entre 2000 y 5000 milisegundos
    let tiempo = Math.floor(Math.random() * 3001) + 2000;

    temporizador = setTimeout(cambiarColor, tiempo);
}

function cambiarColor()
{
    verde = true;
    circulo.style.backgroundColor = "green";
    resultado.textContent = "¡Ahora!";

    temporizador = setTimeout(cambiarColorBack, 2000);
}

function cambiarColorBack()
{
    verde = false;
    circulo.style.backgroundColor = "gray";
    resultado.textContent = "Se acabó el tiempo";

    empezar();
}

function comprobar()
{
    // Cancela el cambio pendiente si pulsamos antes de tiempo
    clearTimeout(temporizador);

    if (verde)
    {
        resultado.textContent = "¡Reflejos rápidos!";
    }
    else
    {
        resultado.textContent = "Mal.";
    }

    empezar();
}

circulo.addEventListener("click", comprobar);


empezar();