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


# Parte 2: switch

## Día de la semana

let diaSem = prompt("Dime un nº del 1-7");

diaSem = parseInt(diaSem);

switch(diaSem){

    case 1:
        console.log("Lunes");
    break;

    case 2:
        console.log("Martes");
    break;

    case 3:
        console.log("Miercoles");
    break;

    case 4:
        console.log("Jueves");
    break;

    case 5:
        console.log("Viernes");
    break;

    case 6:
        console.log("Sabado");
    break;

    case 7:
        console.log("Domingo");
    break;

    default:
        console.log("Ese numero no esta entre el rango de 7 digitos");
}

## Menú de Opciones

let num = prompt("Dime un número del 1 al 3: ");

num = parseInt(num);

switch(num){

    case 1:
        console.log("Opción A seleccionada.");
    break;

    case 2:
        console.log("Opción B seleccionada");
    break;

    case 3:
        console.log("Opción C seleccionada");
    break;

    default:
        console.log("Opción no valida.");
    break;
}

## Semáforo

let color = prompt("Dime un color, o rojo, o amarillo o verde");

switch(color){
   
    case "rojo":
        console.log("Alto");
    break;

    case "amarillo":
        console.log("Precaución");
    break;

    case "verde":
        console.log("Avanza");
    break;

    default:
        console.log("Eso, no es lo que yo he pedido.");
    break;
}

## Clasificación de frutas

let fruta = prompt("Dime una fruta para clasificarla, manzana, platano o uva.");

switch(fruta){
  
    case "manzana":
        console.log("Es una manzana roja.");
    break;

    case "platano":
        console.log("Es un plátano amarillo.");
    break;

    case "uva":
        console.log("Es una uva morada.");
    break;

    default:
        console.log("Fruta no reconocida");
    break;
}

## Mini-reto

let letraCalf = prompt("Dime una nota escolar que sea A,B,C,D,F");

switch(letraCalf){

    case "A":
        console.log("Excelente");
    break;
    
    case "B":
        console.log("Muy bien");
    break;

    case "C":
        console.log("Bien");
    break;

    case "D":
        console.log("Suficiente");
    break;

    case "F":
        console.log("Reprobado");
    break;

    default:
        console.log("Ninguna letra de las indicadas introducida");
    break;
}
