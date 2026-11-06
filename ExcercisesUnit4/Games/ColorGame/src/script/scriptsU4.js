/**
 * Author: ProfitCoder
 * Date: 21/10/2026
 */


// Ejercicios de Eventos en JavaScript

// Nivel 1: Eventos básicos (click, mouseover, keydown)

//Caza del color

const colores = ["rojo","azul","amarillo","verde"];

let botonRojo = document.getElementById("rojo");
let botonAzul = document.getElementById("azul");
let botonAmarillo = document.getElementById("amarillo");
let botonVerde = document.getElementById("verde");

let colorAleatorio = colores[Math.round(Math.random() * (3 - 0) + 0)];

let colorPrueba;

botonRojo.addEventListener("click",colorRojo);
botonAmarillo.addEventListener("click",colorAmarillo);
botonVerde.addEventListener("click",colorVerde);
botonAzul.addEventListener("click",colorAzul);


let elige1 = document.getElementById("elijecolor");

elige1.innerHTML += "Selecciona el color "+colorAleatorio;

function comprobarColor()
{
    let resultado = document.getElementById("sol");

    if (colorPrueba === colorAleatorio)
    {
        resultado.innerHTML = "Has acertado";
    }
    else
    {
        resultado.innerHTML = "Has fallado";
    }
}

function colorRojo()
{
    colorPrueba = colores[0];
    comprobarColor();
}

function colorAmarillo()
{
    colorPrueba = colores[2];
    comprobarColor();
}

function colorAzul()
{
    colorPrueba = colores[1];
    comprobarColor();
}

function colorVerde()
{
    colorPrueba = colores[3];
    comprobarColor();
}