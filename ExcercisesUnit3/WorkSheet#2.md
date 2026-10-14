# Ejercicios de Arrays en JavaScript

En caso de necesitar crear una función, solo podrás usar funciones flecha (arrow functions)

## Nivel Básico – Fundamentos de Arrays

### Crear un array

    let frutas = ["coco","platano","piña","ciruela","uva"];
    
    console.log(frutas[0]);
    console.log(frutas[4]);

### Añadir y eliminar elementos

    let eliminada = frutas.pop();
    
    console.log(frutas);
    
    frutas.shift();
    
    console.log(frutas);
    
    let añadida = frutas.push("Sandia");
    
    console.log(frutas);
    
    frutas.unshift("Melon");
    
    console.log(frutas);

### Recorrer un array

    for(let i = 0; i < frutas.length;i++)
    {
        console.log(frutas[i]);
    }

### Buscar un elemento

    console.log(frutas.indexOf("Sandia"));
    
    console.log(frutas.includes("camión"));

### Concatenar arrays

    let zonas = ["piscina","casa","salon","cocina"];
    
    console.log(frutas.concat(zonas));

## Nivel Intermedio – Transformación y Filtrado

### Duplicar los valores

    let numeros = [2,5,3,6,4];

    var arrayDupl = numeros.map(
        numeros => numeros*2
    );
    
    console.log(numeros);
    console.log(arrayDupl);


### Filtrar los números pares

    let cont = 0;
    let numerosPares = [];
    
    for(let i = 0;i < numeros.length;i++)
    {
        if((numeros[i] % 2) === 0)
        {
            numerosPares = numeros.filter(numeros => (numeros%2)===0);
            cont++;
        }
    }
    
    if(cont > 0)
    {
        console.log(numerosPares);
    }
    else
    {
        console.log("No hay numeros pares");
    }
