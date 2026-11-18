//1. You build a game where the player will see a single RGB value for a color.
//2. The player has to click on a color they think matches the RGB value displayed.
//3. You can easily add more features to the game to make it more difficult.

let numColorA = Math.floor(Math.random() * 6) + 1;

for(let i = 1;i < 7;i++)
{
    let colorG = Math.round(Math.random() * 256);
    let colorR = Math.round(Math.random() * 256);
    let colorB = Math.round(Math.random() * 256);

    if(numColorA === i)
    {
        var colorElegido = `rgb(${colorR}, ${colorG}, ${colorB})`;
    }

    let doc = document.getElementById("color"+i);

    doc.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

let coloradiv = document.getElementById("adivinaColor");

coloradiv.innerHTML = "Which one of this colors are.....  "+colorElegido+"";

let colorClickado1 = document.getElementById("color1").addEventListener("click",comprobar);
let colorClickado2 = document.getElementById("color2").addEventListener("click",comprobar);
let colorClickado3 = document.getElementById("color3").addEventListener("click",comprobar);
let colorClickado4 = document.getElementById("color4").addEventListener("click",comprobar);
let colorClickado5 = document.getElementById("color5").addEventListener("click",comprobar);
let colorClickado6 = document.getElementById("color6").addEventListener("click",comprobar);


function comprobar(event)
{
    let colorPulsado = event.currentTarget;
    let respuesta = document.getElementById("Respuesta");

    if (colorPulsado.id === "color" + numColorA)
    {
        respuesta.innerHTML = "¡Correcto! Has acertado el color.";
        respuesta.style.color = "green";
    }
    else
    {
        respuesta.innerHTML = "Incorrecto. Inténtalo de nuevo.";
        respuesta.style.color = "red";
    }
}