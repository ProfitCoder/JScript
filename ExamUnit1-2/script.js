//Pablo Manuel Fernandez Velazquez

//Ejercicio 1 Control de acceso

function ejercicio1(edad,autorizacion)
{

    var autorizacionPedida = false;

    if(autorizacion === "si")
    {
        autorizacionPedida = true;
    }

    if(edad >= 18 && autorizacionPedida === true)
    {
        console.log("Acceso permitido");
    }
    else if(edad >= 18 && autorizacionPedida === false)
    {
        console.log("Falta autorizacion");
    }
    else if(edad < 18)
    {
        console.log("Acceso denegado");
    }
    else
    {
        console.log("Acceso denegado");
    }
}

let edad = prompt("¿Que edad tienes?");
let autorizacion = prompt("¿Tienes autorización?");

edad = parseInt(edad);

console.log(ejercicio1(edad,autorizacion));


//Ejercicio 2 Analisis de Números



function ejercicio2()
{
    const numeros = [12,7,24,3,18,9,30];
    let numerosPares = [];
    let contador = 0;
    let numerosMayores15 = [];
    let sumaTotal = 0;
    
    for(let i = 0;i < numeros.length;i++)
    {
        console.log(numeros[i]);
    }

    for(let i = 0;i < numeros.length;i++)
    {
        if((numeros[i] % 2) === 0)
        {
            numerosPares.push(numeros[i]);
        }
    }

    console.log(numerosPares);

    for(let i = 0;i < numeros.length;i++)
    {
        if(numeros[i] > 15)
        {
            contador++;
            numerosMayores15.push(numeros[i]);
        }
    }

    console.log(numerosMayores15);
    console.log("Son un total de "+contador+" numeros");

    for(let i = 0;i < numeros.length;i++)
    {
        sumaTotal += numeros[i];
    }

    console.log("la suma de todos los numeros de array es " + sumaTotal);
}


console.log(ejercicio2());


//Ejercicio 3 Generador de numeros aleatorios


function ejercicio3()
{
    let numeroAleatorio = Math.round((Math.random() * (6 - 1) + 1));

    console.log(alert(numeroAleatorio));




    let respuestaRelanzar = confirm("¿Quieres volver a lanzarlo?");
    let respuestaRelanzar2 = "";

    do{    
        respuestaRelanzar2 = confirm("¿Quieres volver a lanzarlo otra vez?");
        if(respuestaRelanzar2 === true)
        {
            numeroAleatorio = Math.round((Math.random() * (6 - 1) + 1));

            console.log(alert(numeroAleatorio));
        }

    }
    while(respuestaRelanzar === true && respuestaRelanzar2 === true);

}

console.log(ejercicio3());



function ejercicio4()
{

    let yearNacimiento = prompt("Cual es tu año de nacimiento");

    yearNacimiento = parseInt(yearNacimiento);

    if(Number.isInteger(yearNacimiento))
    {
        let fechaHoy = new Date;

        console.log(fechaHoy);

        let añoActual = fechaHoy.getFullYear();
        
        let edad = añoActual-yearNacimiento;

        edad = parseInt(edad);

        console.log("Tu edad es " + edad);
    }
    else
    {
        console.log("Dato incorrecto, no es valido");
    }
}

console.log(ejercicio4());



function ejercicio5()
{
    let nombreUser = prompt("Como te llamas");
    document.cookie = "usuario="+nombreUser;
}

console.log(ejercicio5());