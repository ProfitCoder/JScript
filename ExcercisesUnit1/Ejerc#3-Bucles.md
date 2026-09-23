# Ejercicios de Bucles en JavaScript

## Parte 1: for

## Contar del 1 al 10

for(let i = 0;i < 10;i++){
    
    let num = i+1;
    
    console.log("Numero: " + num);
}

## Suma de números

let resultado = 0;

for(let i = 1;i <= 5; i++){

    resultado = resultado + i;

}

console.log("La suma de todos los números del 1 al 5, es: " + resultado);


## Tabla de multiplicar

let num = prompt("Dime un numero para hacer su tabla de multiplicar.");
num = parseInt(num);

for(let i = 0;i <= 10; i++)
    
    console.log(num + " x " + i + " = " + num*i);



## Parte 2: While

## Contador descendente

let num = 10;

while(num > 0){
        
    console.log(num);
    num--;

}

## Suma hasta 20

let suma = 0;

while(suma < 20){
    
    let num = prompt("Dime un numero para sumar hasta que llegue a 20 o lo supere: ");
    num = parseInt(num);

    suma += num;

    console.log("Ahora mismo la suma de los números es: " + suma);
}


## Parte 3: Do-while

## Pedir contraseña

let pasw = "0";

do{

    pasw = prompt("Adivina la contraseña de 4 digitos: ");
}
while(pasw != "1234");

console.log("Enhorabuena, has acertado la contraseña");


## Contador con do-While

let cont = 0;

do {

    console.log("Ahora vamos por: " + cont);
    cont++;
} 
while (cont <= 5);

