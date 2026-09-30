# Ejercicios con Date en JavaScript

## Nivel 1 – Creación y lectura de fechas

### Fecha actual

    let FechaHoy = Date();
    
    console.log(FechaHoy);

### Fecha específica

    let FechaNacimiento = new Date("2007/06/06 01:06:00");
    
    console.log(FechaNacimiento);

### Obtener partes de una fecha

    let fechaHoy = new Date();
    
    console.log(fechaHoy.getFullYear());
    console.log(fechaHoy.getMonth());
    console.log(fechaHoy.getDate());
    console.log(fechaHoy.getDay());
    console.log(fechaHoy.getHours()+" Horas, "+fechaHoy.getMinutes()+" minutos y "+fechaHoy.getSeconds()+" segundos.");

### Convertir a string

    let fechaString = new Date();
    
    console.log(fechaString.toDateString());
    console.log(fechaString.toTimeString());

## Nivel 2 – Operaciones con fechas

### Sumar días

    function crearFecha(fecha,numDias)
    {
        let fechaCreada = new Date(fecha);
    
        fechaCreada.setDate(fechaCreada.getDate() + numDias);
    
        return fechaCreada;
    }

console.log(crearFecha(Date.now(),125));

### Diferencia entre dos fechas

    let fechaHoy = new Date();
    let fechaNavidad = new Date(2026,11,31);
    
    let fechaDif = fechaNavidad-fechaHoy;
    
    fechaDif = ((((fechaDif/1000)/60)/60)/24);
    
console.log("Quedan " + fechaDif + " dias para navidad.");
