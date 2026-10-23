document.getElementById("divRojo").addEventListener("click", chequear);
document.getElementById("divAzul").addEventListener("click", chequear);
document.getElementById("divVerde").addEventListener("click", chequear);
document.getElementById("divAmarillo").addEventListener("click", chequear);

var opcionAd = document.getElementById("colorAveriguar");
var colorAdivinar;

function generarOpcAleatoria()
{
    let opciones = ["Rojo", "Azul", "Verde", "Amarillo"];
    let posAleatoria = Math.floor(Math.random() * opciones.length);

    colorAdivinar = opciones[posAleatoria];
    opcionAd.textContent = "Tienes que tocar el color " + colorAdivinar;
}

function chequear(e)
{
    if (e.currentTarget.id === "div" + colorAdivinar)
    {
        opcionAd.textContent = "Eres un fenómeno";
    }
    else
    {
        opcionAd.textContent = "Vaya paquete";
    }
}

generarOpcAleatoria();