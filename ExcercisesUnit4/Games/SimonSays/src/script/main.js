let colores = ["rojo", "azul", "verde", "amarillo"];
let colorActual;
let nivel = 0;
let puedePulsar = false;

let resultado = document.getElementById("resultado");
let empezar = document.getElementById("empezar");

for (let color of colores)
{
    document.getElementById(color).addEventListener("click", comprobar);
}

empezar.addEventListener("click", iniciar);

function iniciar()
{
    nivel = 1;
    empezar.disabled = true;
    mostrarColor();
}

function mostrarColor()
{
    puedePulsar = false;
    resultado.textContent = "Nivel " + nivel + ": mira el color";

    let posicion = Math.floor(Math.random() * colores.length);
    colorActual = colores[posicion];

    let boton = document.getElementById(colorActual);
    boton.classList.add("encendido");

    setTimeout(function()
    {
        boton.classList.remove("encendido");
        resultado.textContent = "Ahora pulsa el color";
        puedePulsar = true;
    }, 800);
}

function comprobar(e)
{
    if (!puedePulsar)
    {
        return;
    }

    puedePulsar = false;

    if (e.currentTarget.id === colorActual)
    {
        nivel++;
        resultado.textContent = "¡Correcto!";

        setTimeout(mostrarColor, 1000);
    }
    else
    {
        resultado.textContent = "Has perdido en el nivel " + nivel;
        empezar.disabled = false;
    }
}