/*
* Author: ProfitCoder
* Date: 10/11/2026
*/


//Consts
const time = document.getElementById("time");
const startB = document.getElementById("start");
const stopB = document.getElementById("stop");
const resetB = document.getElementById("reset");

let contador = 0;
let intervalo;

//Events
startB.addEventListener("click", EmpezarContador);
stopB.addEventListener("click", pararSegundos);
resetB.addEventListener("click", resetNumeros);

//Functions
function EmpezarContador()
{
    intervalo = setInterval(mostrarsegundos, 1000);
}

function mostrarsegundos()
{
    contador += 1;

    let horas = Math.floor(contador / 3600);
    let minutos = Math.floor((contador % 3600) / 60);
    let segundos = contador % 60;

    time.innerHTML =
        horas.toString().padStart(2, "0") + ":" +
        minutos.toString().padStart(2, "0") + ":" +
        segundos.toString().padStart(2, "0");
}

function pararSegundos()
{
    clearInterval(intervalo);
}

function resetNumeros()
{
    clearInterval(intervalo);
    contador = 0;
    time.innerHTML = "00:00:00";
}
