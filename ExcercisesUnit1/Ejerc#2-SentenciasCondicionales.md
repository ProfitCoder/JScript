# Relacion de ejercicios 2

## Número positivo y negativo

let num = prompt("Dimer un numero");

if(num >= 0)
    console.log("El número es positivo");
else
    console.log("El número es negativo");    


## Mayor de edad

let edad = 19;

if(edad >= 18)
    console.log("Eres mayor de edad");
else
    console.log("Eres menor de edad");


## Número par o impar

let parimpar = prompt("Dime un número, te dire si es par o impar");

if(parimpar%0 == 0)
    console.log("El número es par");

else
    console.log("El número es impar");


## Calificaciones

let calf = prompt("Dime un numero del 1-10: ");

parseInt(calf);

if(calf <= 10){
    if(calf >= 0){
        if(calf >= 5){
            console.log("Aprobado");
        }
        else{
            console.log("Reprobado");
        }
    }
    else{
        console.log("El numero es negativo, no vale");
    }
}
else{
    console.log("El numero es demasiado grande");
}

## El mayor de dos numeros

let num1 = prompt("Dime un numero");
let num2 = prompt("Dime otro numero");

parseInt(num1);
parseInt(num2);

if(num1 === num2){
    console.log("Los numeros son iguales");
}
else if(num1 >= num2){
    console.log("El 1er numero es mayor que el segundo");
}
else
    console.log("El 2ndo numero es mayor que el primero");
