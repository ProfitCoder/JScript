//Relación de Ejercicios: Operadores Lógicos en JavaScript

//Ejercicio 1: Edad y permiso

let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");

// Usa un condicional con && para determinar si puede entrar

if(edad >= 18 && permiso === "sí"){
    console.log("Enhorabuena, puede entrar");
}
else
    console.log("No puede entrar");

//Ejercicio 2: Aprobado en materias

let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");

// Usa un condicional con || para determinar si pasa al siguiente nivel
if(matematicas === "sí" || fisica === "sí" || quimica === "sí"){
    console.log("Pasas al siguiente nivel.");
}

//Ejercicio 3: Contraseña correcta

let contraseña = prompt("Ingrese la contraseña");

// Usa ! para comprobar si no es correcta

while(contraseña != "1234"){
    console.log("Acceso denegado, prueba otra vez");
    contraseña = prompt("Cual es el siguiente intento?");
}

console.log("Lo has conseguido");


//Ejercicio 4: Número dentro de rango

let numero = Number(prompt("Ingrese un número"));

// Usa && para verificar el rango

if(numero >= 10 && numero <= 50)
{
    console.log("El numero esta entre el 10 y el 50.");
}

//Ejercicio 5: Mayoría de edad o tutor presente

let edad = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");

// Usa && y || según corresponda

if(edad >= 18 && tutor === "sí"){
    console.log("Puede entrar");
}

//Ejercicio 6: Verificación de acceso

let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");

// Condicional usando && y ||

if((usuario === "admin" && contraseña === "1234") || (usuario === "invitado" && contraseña === ""))
{
    console.log("Ha accedido.");
}

//Ejercicio 7: Números positivos y menores que 100

let numero = Number(prompt("Ingrese un número"));

// Usa operadores lógicos para evaluar ambas condiciones

if(numero >= 0 && numero < 100)
{
    console.log("El número es positivo y menor que 100.");
}

//Ejercicio 8: Día laborable

let dia = prompt("Ingrese un día de la semana");

// Usa || para comparar con lunes, martes, miércoles, jueves, viernes

if(dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes")
{
    console.log("Es un dia de semana");
}

//Ejercicio 9: Votación válida

let edad = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");

// Usa && y >= para verificar la condición

if(edad >= 18 && nacionalidad === "Española")
{
    console.log("Puede votar");
}

//Ejercicio 10: Control de acceso con bucle

let usuario, contraseña;

while (!(usuario === "admin" && contraseña === "1234")) {
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");
    // Mensaje de error si no es correcto

    if(usuario != "admin" || contraseña != "1234"){
        console.log("Contraseña erronea, prueba otra vez");
    }
}
console.log("¡Acceso permitido!");
