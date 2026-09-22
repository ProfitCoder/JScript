# Parte 2.1: El Operador Ternario en JavaScript

## Par o impar

let numero = prompt("Dime un numero, y te dire si es par o impar"); 
(numero%2 == 0)?console.log("Es un numero par"):console.log("Es un numero impar");

## Asignador de descuentos

let puntosAcumulados = prompt("Cuantos puntos tienes acumulados, para el descuento:");
(puntosAcumulados<100)?(puntosAcumulados<=50)?console.log("No tienes ningun descuento"):console.log("Tienes un descuento del 10%"):console.log("Tienes un descuento del 20%");


## Validador de Acceso

let edad = prompt("Dime que edad tienes: ");
let altura = prompt("¿Y cuanto mides? en cm : ");

(edad >= 18)?(altura > 160)?console.log("Adelante, puedes pasar"):console.log("Eres muy pequeño"):console.log("No eres lo suficientemente mayor para subir.");


## Valor por Defecto con Fallback

let username = prompt("Introduce un nombre de usuario");

(username == null || username == undefined)?console.log("Has entrado como 'Invitado'"):console.log("Bienvenido " + username);


## Conversor de Calificaciones

let nota = prompt("Dime una nota del 0 al 10");

(nota >= 0 && nota <= 10)?(nota < 9)?(nota < 7)?(nota >= 5)?console.log("Aprobado"):console.log("Suspenso"):console.log("Notable"):console.log("Sobresaliente."):console.log("Nota introducida incorrecta");


## Calculos de gastos de envio

let totalCompra = prompt("Cuanto te vas a gastar en la compra");
let precioEnvio = 4.95;

totalCompra = parseFloat(totalCompra);
precioEnvio = parseFloat(precioEnvio);

let precioFinal = totalCompra + precioEnvio;

(totalCompra > 50)?console.log("El precio final a pagar es: " + totalCompra):console.log("El precio a pagar final es: ",precioFinal);


## Normalizador de Rangos (Clamp)

let valor = prompt("Dame un valor [0-100]");

(valor > 0)?(valor < 100)?console.log("El valor introducido es " + valor):console.log("El valor devuelto entonces sera 100"):console.log("El valor devuelto entonces es 0");



# THIS TWO THIGHS ARE THE SAME

(numero>8)?console.log("Mayor"):console.log("Menor");

tambien se puede poner en lugar de el true otra sentencia

(numero>8)?(numero < 12)?console.log("esta entre 8 y 12"):console.log("es un numero mayor"):console.log("Menor");
