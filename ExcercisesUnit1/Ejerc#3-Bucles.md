# Ejercicios de Bucles en JavaScript

## Parte 1: for

### Contar del 1 al 10

for(let i = 0;i < 10;i++){
    
    let num = i+1;
    
    console.log("Numero: " + num);
}

### Suma de números

let resultado = 0;

for(let i = 1;i <= 5; i++){

   resultado = resultado + i;

}

console.log("La suma de todos los números del 1 al 5, es: " + resultado);


### Tabla de multiplicar

let num = prompt("Dime un numero para hacer su tabla de multiplicar.");
num = parseInt(num);

for(let i = 0;i <= 10; i++)
  
    console.log(num + " x " + i + " = " + num*i);



## Parte 2: While

### Contador descendente

let num = 0;

while(num <= 10){
    
    console.log(num);
    num++;

}
