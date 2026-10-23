/**
 * Author: ProfitCoder
 * Date: 23/10/2026
 */

let elemento = document.getElementById("BtnChange");

elemento.innerHTML = "Boton Gloton";

function colorfondoA()
{
    elemento.style.backgroundColor = "blue";
}

function colorfondoO()
{
    elemento.style.backgroundColor = "white";
}

function texto()
{
    elemento.innerHTML = "Has clickado el boton!!!";
}

elemento.addEventListener("mouseover",colorfondoA);
elemento.addEventListener("mouseout",colorfondoO);
elemento.addEventListener("click",texto);