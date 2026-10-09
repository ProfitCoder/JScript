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
