# Funciones

## Function Nº1
    
    let numEvaluar = prompt("Dame un numero para ver si es par o impar");
    numEvaluar = parseInt(numEvaluar);
    
    function isOdd(numEvaluar)
    {
        let odd = false;
    
        if((numEvaluar % 2) === 0)
        {
            odd = true;
        }
        
        return odd;
    }
    
    if(isOdd(numEvaluar) != true)
    {
        console.log("El número introducido es Impar");
    }
    else
    {
        console.log("El número introducido es Par");
    }

## Function Nº2
    
    function inARange(numBusc, numMin, numMax)
    {
        let boleano = false;
    
        if(numBusc >= numMin && (numBusc <= numMax))
        {
            boleano = true;
        }
    
        return boleano;
    }
    
    let numBusc = prompt("Dame el numero que quieres que compruebe si esta entre los dos siguientes numeros que te voy a pedir");
    let numMin = prompt("Dame el numero mas pequeño del rango");
    let numMax = prompt("Dame el numero mas grande del rango");
    
    numBusc = parseInt(numBusc);
    numMax = parseInt(numMax);
    numMin = parseInt(numMin);
    
    if(inARange(numBusc,numMin,numMax))
    {
        console.log("El número esta entre los otros dos números");
    }
    else
    {
        console.log("El número no entra en el rango de números.");
    }

## Function Nº3
    
    let numeros = [4,8,2,5,9];
    
    function getBiggestNumber(numeros)
    {  
        let mayorNumero = numeros[0];
    
        for(let i = 0;i <= numeros.length;i++)
        {
            if(numeros[i] > mayorNumero)
            {
                mayorNumero = numeros[i];
            }
        }
    
        return mayorNumero;
    }
    
    console.log(getBiggestNumber(numeros));

## Function Nº4

    function getPercentage(num, numPorc){
        let numDev = ((num*numPorc)/100);
        return numDev;
    }
    
    console.log(getPercentage(500,46));

## Function Nº5

    function getRandomColorSequence(colores, numLong)
    {
        let coloresDev = [];
    
        for(let i = 0;i < Math.round(Math.random() * (numLong - 0 + 1));i++)
        {
            coloresDev[i] = colores[Math.floor(Math.random() * colores.length)];
        }
    
        return coloresDev;
    }
    
    colores = ["verde","azul","rojo","Negro"]
    
    console.log(getRandomColorSequence(colores,10));

## Nº6 Generar una jugada de piedra, papel o tijera

    function getRockPaperScissor() {
        const options = ["rock", "paper", "scissor"];
        const index = Math.floor(Math.random() * options.length);
    
        return options[index];
    }

## Nº7 Generar una secuencia de jugadas

    function getRockPaperScissorRandomSequence(length) {
        const sequence = [];
    
        for (let i = 0; i < length; i++) {
            sequence.push(getRockPaperScissor());
        }
    
        return sequence;
    }

## Nº8 Dejar solo los números menores que el filtro

    function filterNumbersGreaterThan(numbers, filter) {
        return numbers.filter(number => number < filter);
    }

## Nº9 Obtener el factorial

    function getFactorial(x) {
        if (!Number.isInteger(x) || x < 0) {
            throw new Error("El número debe ser un entero no negativo");
        }
    
        let result = 1;
    
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
    
        return result;
    }
    
## Nº10 Comparar dos arrays por sus elementos y orden

    function areArraysEqual(a, b) {
        if (a.length !== b.length) return false;
    
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
    
        return true;
    }

## Nº11 Convertir un texto a Hacker Speak
    
    function toHackerSpeak(text) {
        const replacements = {
            a: "4",
            e: "3",
            i: "1",
            o: "0",
            s: "5"
        };
    
        return text.replace(/[aeios]/gi, letter => {
            return replacements[letter.toLowerCase()];
        });
    }

## Nº12 Obtener la extensión de un archivo

    function getFileExtension(file) {
        const index = file.lastIndexOf(".");
    
        if (index <= 0) return "";
    
        return file.slice(index + 1);
    }

## Nº13 Aplanar un array de dos dimensiones

    function flatArray(arr) {
        return arr.flat();
    }

## Nº14 Eliminar elementos duplicados

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

## Nº15 Contar las apariciones de una letra
    
    function countLetter(letter, text) {
        let count = 0;
    
        for (const character of text) {
            if (character === letter) {
                count++;
            }
        }
    
        return count;
    }

## Nº16 Comprobar si puedes jugar una carta de UNO

    function canPlay(hand, face) {
        const [faceColor, faceNumber] = face.split(" ");
    
        for (const card of hand) {
            const [color, number] = card.split(" ");
    
            if (color === faceColor || number === faceNumber) {
                return true;
            }
        }
    
        return false;
    }

## Nº17 Eliminar palabras de un texto

    function removeWords(str, words) {
        return str
            .split(/\s+/)
            .filter(word => !words.includes(word))
            .join(" ");
    }

## Nº18 Obtener un rango ascendente o descendente
### Se presupone que a y b son números enteros.

    function getRange(a, b, inclusive = true) {
        const result = [];
        const step = a <= b ? 1 : -1;
    
        const start = inclusive ? a : a + step;
        const end = inclusive ? b : b - step;
    
        for (
            let i = start;
            step === 1 ? i <= end : i >= end;
            i += step
        ) {
            result.push(i);
        }
    
        return result;
    }
