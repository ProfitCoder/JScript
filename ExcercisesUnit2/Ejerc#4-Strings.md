# Ejercicios con String en JavaScript

## Nivel 1 – Manipulación básica

### Longitud de un string

    let cadena = "JavaScript";
    
    console.log("La cadena tiene "+cadena.length+" caracteres");

### Acceso a caracteres

    let cadenaMund = "Hola mundo";
    
    console.log("El primer caracter es "+cadenaMund.charAt(0)+" y el ultimo es "+cadenaMund.charAt(cadenaMund.length-1));

### Mayúsculas y minúsculas

    let cadenaFrase = "Programar es divertido";
    
    console.log(cadenaFrase.toUpperCase());
    console.log(cadenaFrase.toLowerCase());

### Concatenación

    let pal1 = "hola ";
    let pal2 = "mundo";
    
    console.log(pal1+pal2);
    console.log(pal1.concat(pal2));

## Nivel 2 – Búsqueda y extracción

### Índices de caracteres

    let palabra = "Hola mundo";
    
    console.log(palabra.indexOf("o")+" y "+palabra.lastIndexOf("o"));

### Subcadenas

    let frase = "JavaScript es genial";
    
    console.log(frase.substring(0,10));             //Coge de una posicion a otra
    console.log(frase.slice(14));               //Coge desde esa posicion

### Reemplazo de texto

    let fras = "El perro corre rápido";
    
    console.log(fras);
    
    fras = fras.replace("perro","gato");
    
    console.log(fras);

### Incluye o empieza con

    let verifica = "Frontend Developer";
    
    if(verifica.includes("end"))
    {
        console.log("Si incluye end");
    }
    else
    {
        console.log("No incluye el end");
    }
    
    if(verifica.startsWith("Front"))
    {
        console.log("Si empieza por Front");        
    }
    else
    {
        console.log("No empieza por Front");
    }
    
    if(verifica.endsWith("per"))
    {
        console.log("Si acaba en per");
    }
    else
    {
        console.log("No incluye el per");
    }

## Nivel 3 – Transformaciones avanzadas

### Dividir un string
    
    let colores = "rojo,verde,azul,amarillo";
    
    colores = colores.split(",");
    
    console.log(colores);

### Repetir texto

    let palab = "hola";
    
    console.log(palab.repeat(5));

### Eliminar espacios

    let fraseEspacios = "Eliminar espacios";
    
    console.log(fraseEspacios.trim());

### Padding

    let agente = "7";
    
    agente = agente.padStart(3,"0");
    
    console.log(agente);

## Nivel 4 – Retos aplicados

### Contar vocales

    let cadenaEntrenar = "Hola esta es una cadena";
    let numPal = 0;
    
    function contarVocales(cadena){
        for(let i = 0;i <= cadena.length-1;i++){
            numPal++;
        }
    }
        return numPal;
    }
    
console.log(contarVocales(cadenaEntrenar));
