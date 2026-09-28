# Relación de Ejercicios en JavaScript

## Ejercicio 1: Suma de números

    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));

//Tu código aquí para mostrar suma, resta, multiplicación y división

    let resSum = num1 + num2;
    let resRes = num1 - num2;
    let resMult = num1 * num2;
    let resDiv = num1 / num2;

    resDiv = resDiv.toFixed(2);        //Esto sirve para sacer unicamente 2 decimales

    console.log("Aqui tienes los resultados de que con los numeros "+num1+" y "+num2+".");
    console.log("Tenemos la Suma: "+resSum+" ,Resta: "+resRes+" ,Multiplicacion: "+resMult+" ,División: "+resDiv);

## Ejercicio 2: Determinar par o impar

    let numero = Number(prompt("Ingrese un número"));
// Usa un condicional para determinar si es par o impar

    if(numero%2 === 0){
        console.log("El número es par");
    }
    else{
        console.log("El número es impar");
    }


## Ejercicio 3: Mayor de tres números

    let a = Number(prompt("Número 1"));
    let b = Number(prompt("Número 2"));
    let c = Number(prompt("Número 3"));

// Escribe un condicional para encontrar el mayor

    if (a >= b && a >= c) {
        console.log("El mayor número es " + a);
    } else if (b >= a && b >= c) {
        console.log("El mayor número es " + b);
    } else {
        console.log("El mayor número es " + c);
    }


 ## Ejercicio 4: Tabla de multiplicar

    let num = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar

    for(let i = 1;i <= 10;i++)
    {
        let resultado = num*i;
        console.log(num+" x "+i+" = "+resultado);
    }

## Ejercicio 5: Suma de números del 1 al N

    let N = Number(prompt("Ingrese un número"));
    let resultadoFinal = 0;

// Usa un bucle for y una variable acumuladora para sumar

    for(let i = 0;i <= N;i++)
    {
        resultadoFinal = resultadoFinal + i;
    }
    
    console.log("La suma de todos y cada uno de los numeros desde el 0 hasta el "+N+" es: "+ resultadoFinal);

## Ejercicio 6: Contador de números positivos y negativos

    let positivos = 0;
    let negativos = 0;

    for(let i = 0; i < 5; i++) {
        let num = Number(prompt("Ingrese el número ${i+1}"));
    // Incrementa positivos o negativos según corresponda

    if(num >= 0)
        {
            positivos++;
        }
        else
        {
            negativos++;
        }
    }

    console.log("En total hay "+positivos+ " numeros positivos y "+negativos+ " negativos.");

## Ejercicio 7: Número primo

    let num = Number(prompt("Ingrese un número"));
    let sn = 0;

// Usa un bucle para verificar si es divisible por algún número menor que él

    for(let i = num;i > 0;i--)
    {
        let div = num%i;
    
        if(div === 0)
        {
            sn++;
        }
    }
    
    if(sn > 0)
    {
        console.log("Si se puede dividir este numero entre si mismo");
    }

## Ejercicio 8: Factorial de un número

    let numero = Number(prompt("Ingrese un número"));
    let factorial = 1;

// Calcula el factorial con un bucle
    
    for(let i = 0;i >= numero;i++)  
    {
        let cuentafact = (i*i);
        factorial = i*cuentafact;
    }

## Ejercicio 9: Números pares hasta N

    let N = Number(prompt("Ingrese un número"));
    let num = "";

// Usa un bucle y el operador % para imprimir los pares

    for(let i = 0;i <= N;i++)
    {
        if(N%2 === 0)
        {
            num =+ N;
        }
    }
    
    console.log("Los números son: " + num);

## Ejercicio 10: Adivina el número

    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intento;

    while(intento !== numeroSecreto) {
        intento = Number(prompt("Adivina el número entre 1 y 10"));
    // Indica si el intento es mayor, menor o correcto

    if(intento >= numeroSecreto)
    {
        if(intento > numeroSecreto)
            console.log("Prueba otra vez.");
        else
            console.log("Has acertado!, era el "+numeroSecreto);
    }
    else
    {
        console.log("Prueba otra vez.");
    }
}
