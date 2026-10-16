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

### Sumar todos los valores 

    let sumArray = numeros.reduce((total, numero) => {return total + numero},0);
    
    console.log(sumArray);

### Ordenar un array de nombres

    let nombres = ["pablo","juan","antonio"];
    
    nombres = nombres.sort((a,b) => a+b);
    nombres = nombres.reverse();
    
    console.log(nombres);

### Convertir un array en una cadena de texto

    let convertidoArray = nombres.join("-");
    
    console.log(convertidoArray);

### Dividir una cadena de texto

    let separado = convertidoArray.split(";");
    
    console.log(separado);

## Nivel Avanzado – Manipulación y Combinaciones

### Eliminar duplicados de un array.

    let arrayConDups = ["coco","casa","coco","palomas"];
    let sinDuplicados = [];
    
    sinDuplicados = arrayConDups.filter((palabra, posicion) => { return arrayConDups.indexOf(palabra) === posicion});
    
    console.log(sinDuplicados);

### Encontrar el número mayor y menor en un array.

    const numeros = [12, 5, 28, 3, 17, 9];
    
    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);
    
    console.log("Mayor:", mayor);
    console.log("Menor:", menor);

### Aplanar un array de arrays.

    const numeros = [[1, 2], [3, 4], [5, 6]];
    
    const resultado = numeros.flat();
    
    console.log(resultado);

### Contar cuántas veces aparece un elemento en un array.

    const numeros = [1, 2, 3, 2, 4, 2, 5, 2];
    
    const contador = numeros.reduce((total, numero) => {
        if (numero === 2) {
            return total + 1;
        }
    
        return total;
    }, 0);
    
    console.log("El número 2 aparece " + contador + " veces.");

### Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos.

    const nombres = ["Ana", "Luis", "Marta", "Pedro"];
    const edades = [23, 30, 19, 27];
    
    const personas = nombres.map((nombre, indice) => {
        return {
            nombre: nombre,
            edad: edades[indice]
        };
    });
    
    console.log(personas);

### Ordenar un array de objetos

    const usuarios = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Luis", edad: 30 },
        { nombre: "Marta", edad: 20 },
        { nombre: "Pedro", edad: 18 },
        { nombre: "Lucía", edad: 27 }
    ];
    
    usuarios.sort((a, b) => a.edad - b.edad);
    
    console.log(usuarios);

### Extraer elementos unicos y ordenarlos

    const numeros = [8, 3, 5, 3, 1, 8, 6, 1, 4, 5];
    
    const unicos = [...new Set(numeros)];
    
    unicos.sort((a, b) => a - b);
    
    console.log(unicos);

### Suma de cuadrado de los numeros pares

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    
    const resultado = numeros
        .filter(numero => numero % 2 === 0)
        .map(numero => numero * numero)
        .reduce((suma, numero) => suma + numero, 0);
    
    console.log(resultado);
