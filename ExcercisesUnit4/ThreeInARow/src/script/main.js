let contador = 0;
let terminado = false;

let mensaje = document.getElementById("whosnext");

let casilla1 = document.getElementById("casilla1");
let casilla2 = document.getElementById("casilla2");
let casilla3 = document.getElementById("casilla3");
let casilla4 = document.getElementById("casilla4");
let casilla5 = document.getElementById("casilla5");
let casilla6 = document.getElementById("casilla6");
let casilla7 = document.getElementById("casilla7");
let casilla8 = document.getElementById("casilla8");
let casilla9 = document.getElementById("casilla9");

let reiniciar = document.getElementById("reiniciar");

casilla1.innerHTML = "";
casilla2.innerHTML = "";
casilla3.innerHTML = "";
casilla4.innerHTML = "";
casilla5.innerHTML = "";
casilla6.innerHTML = "";
casilla7.innerHTML = "";
casilla8.innerHTML = "";
casilla9.innerHTML = "";

casilla1.addEventListener("click",ponerCaracter)
casilla2.addEventListener("click",ponerCaracter)
casilla3.addEventListener("click",ponerCaracter)
casilla4.addEventListener("click",ponerCaracter)
casilla5.addEventListener("click",ponerCaracter)
casilla6.addEventListener("click",ponerCaracter)
casilla7.addEventListener("click",ponerCaracter)
casilla8.addEventListener("click",ponerCaracter)
casilla9.addEventListener("click",ponerCaracter)

reiniciar.addEventListener("click",reiniciarGame);

function actualizarTurno()
{
    if (contador === 9) 
    {
        mensaje.innerHTML = "Tablero completo";
    } 
    else if (contador % 2 === 0) 
    {
        mensaje.innerHTML = "Turno de X";
    } 
    else
    {
        mensaje.innerHTML = "Turno de O";
    }
}

function ponerCaracter(e)
{
    if(0 === contador%2)
    {
        e.currentTarget.innerHTML="X";
    }
    else
    {
        e.currentTarget.innerHTML="O";
    }

    contador++;
    game();

    if (!terminado) {
        actualizarTurno();
    }
}

function reiniciarGame()
{
    casilla1.innerHTML = "";
    casilla2.innerHTML = "";
    casilla3.innerHTML = "";
    casilla4.innerHTML = "";
    casilla5.innerHTML = "";
    casilla6.innerHTML = "";
    casilla7.innerHTML = "";
    casilla8.innerHTML = "";
    casilla9.innerHTML = "";

    contador = 0;
    terminado = false;
    actualizarTurno();
}

function ponerCaracter(e)
{
    if (!terminado && e.currentTarget.innerHTML === "") {
        if (contador % 2 === 0) {
            e.currentTarget.innerHTML = "X";
        } else {
            e.currentTarget.innerHTML = "O";
        }

        contador++;
        game();

        if (!terminado) {
            actualizarTurno();
        }
    }
}

function game()
{
    let combinaciones = [
        [casilla1, casilla2, casilla3],
        [casilla4, casilla5, casilla6],
        [casilla7, casilla8, casilla9],
        [casilla1, casilla4, casilla7],
        [casilla2, casilla5, casilla8],
        [casilla3, casilla6, casilla9],
        [casilla1, casilla5, casilla9],
        [casilla3, casilla5, casilla7]
    ];

    for (let combinacion of combinaciones) {
        let a = combinacion[0].innerHTML;
        let b = combinacion[1].innerHTML;
        let c = combinacion[2].innerHTML;

        if (!terminado && a !== "" && a === b && b === c) {
            mensaje.innerHTML = "¡Ha ganado " + a + "!";
            terminado = true;
        }
    }

    if (!terminado && contador === 9) {
        mensaje.innerHTML = "¡Empate!";
        terminado = true;
    }
}