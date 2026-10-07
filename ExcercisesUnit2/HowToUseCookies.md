# Cookies

## Para definir las cookies es tan sencillo como:

  document.cookie = "NommbreUsuario = Pablo";
  document.cookie = "Edad = 19";
  
  document.cookie;

function getCookie(nombre) {
  const nombreEQ = nombre + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
  }
  return null;
}

var nombreMostrar = getCookie("Nombre"); 

if (!nombreMostrar) {
    nombreMostrar = prompt("¿Cuál es tu nombre?");
    document.cookie = "Nombre=" + nombreMostrar + "";
}

document.getElementById("bienvenida").innerHTML = "Bienvenido " + nombreMostrar;

//Como definir en cookies un color para siempre

function elegirRojo(){
    document.cookie = "colorFondo = red";
    document.body.style.backgroundColor = "red";
}

function elegirVerde(){
    document.cookie = "colorFondo = green";
    document.body.style.backgroundColor = "green";
}

let bgColor = getCookie("colorFondo");

if(bgColor)
{
    document.body.style.backgroundColor = bgColor;
}
