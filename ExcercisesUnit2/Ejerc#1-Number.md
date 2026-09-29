# Ejercicios con Number en JavaScript

## Nivel 1 – Conversión y propiedades básicas

  let num = "123";
  let float = "3.14";
  let letras = "abc";

  num = parseInt(num);
  float = parseFloat(float);
  letras = Number(letras);

if(Number.isInteger(num))
{
    console.log(num+" es un entero.");
}
else
{   
    console.log(num+" no es un entero");
}

if(Number.isInteger(float))
{
    console.log(float+" es un entero.");
}
else
{
    console.log(float+" no es un entero");
}

if(Number.isNaN(letras))
{
    console.log(letras+" devuelve el valor NaN.");
}
else
{
    console.log(letras+" no es un entero");
}

let inf = 1/0;

(Number.isFinite(inf))?console.log("Es un número finito el resultado"):console.log("Es un número infinito el resultado");

//Nivel 2 – Métodos de instancia

//Número con decimales fijos

let numPi = 3.141592;

console.log("Numero Pi con 2 decimales "+numPi.toFixed(2));
console.log("Numero Pi con 4 decimales "+numPi.toFixed(4));
console.log("Numero Pi con 6 decimales "+numPi.toFixed(6));

//Representación exponencial

let numNotacion = 123456;

console.log("Representacion exponencial de "+numNotacion+" es = "+numNotacion.toExponential(2));

//Conversión a string con base

let numConv = 255;

console.log(numConv.toString(2));       //Binario
console.log(numConv.toString(8));          //Octal
console.log(numConv.toString(16));          //Hexadecimal

//Precisión controlada

let numPrecision = 123.456789;

console.log(numPrecision.toPrecision(4));
console.log(numPrecision.toPrecision(7));

//Nivel 3 – Retos aplicados

//Validador de números

let cadenaEnt = "123";

function validadorNumerico(cadena){
    let numb = Number(cadena);
    if(isNaN(numb))
    {
        console.log("El número no es valido");
    }
    else if(Number.isInteger(numb))
    {
        console.log("El numero es entero");
    }
    else
    {
        console.log("El numero es decimal");
    }
    
}

validadorNumerico(cadenaEnt);
