//Ejercicios con Math en JavaScript

//Nivel 1 – Básicos

//Número absoluto

let num = -16.56;

console.log(Math.abs(num));

//Redondeo simple

let num = 2.78;

console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//Potencias y raices

let num1 = 5;
let num2 = 3;

let resultado = (Math.pow(num1,num2));

console.log(resultado);
console.log("<br>La raiz cuadrada de 81 es "+Math.sqrt(81))

//Valor máximo y mínimo

let array = [10,-5,3,99,42];

console.log(Math.max(array));
console.log(Math.min(array));

//Nivel 2 – Aleatoriedad

//Numero aleatorio entre 1 y 0

console.log(Math.random());

//Dado virtual

console.log(Math.floor(Math.random(1,6)));

//numero aleatorio de un rango

let numMin = 3;
let numMax = 49;

function numRango(numMin,numMax){
    return Math.floor(Math.random(numMin,numMax));
}

console.log(numRango(numMin,numMax));

//Nivel 3 – Trigonometría y logaritmos

//Seno y coseno

let grados = 45;

console.log(Math.sin(grados));
console.log(Math.cos(grados));

//Tangente y arcotangente

let grad = 60;

console.log(Math.atan(grad));

//Logaritmos

console.log(Math.log(10));

//Nivel 4 – Retos aplicados

//Juego: adivina el número

let numAl = Math.floor(Math.random(1,100));
let bucl = false;



while(bucl != true){
    let resp = prompt("Intenta adivinar el numero entre 1 y 100"); 
    resp = parseInt(resp);

    if(resp > numAl){
        console.log("Error, el numero es menor.");
    }
    else if(resp < numAl){
        console.log("Error  , el numero es mayor.");
    }
    else{
        console.log("Has acertado");
        bucl = true;
    }
}
