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

