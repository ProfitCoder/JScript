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

### Comparar fechas

    let Fecha1 = new Date(2024,11,21);
    let Fecha2 = new Date(2026,0,8);
    
    if(Fecha1 > Fecha2){
        console.log("La fecha "+Fecha1.toISOString()+" es mayor que "+Fecha2.toISOString());
    }
    else if(Fecha1 < Fecha2){
        console.log("La fecha "+Fecha1.toISOString()+" es menor que "+Fecha2.toISOString());
    }
    else
    {
        console.log("Las dos fechas son iguales");
    }

### Primer día del mes
    
    let opciones = { weekday: 'long'};
    
    function conseguirDiaMes(año,mes){
        let fecha = new Date(año,mes);
    
        fecha = new Date(año,mes,1);
    
        return fecha.toLocaleDateString('es-Es',opciones);
    }
    
    let resultado = conseguirDiaMes(2022,4);
    
    console.log("El dia 1 de el mes 4 de 2022 es "+resultado);


## Nivel 3 – Formateo y zonas horarias

### ISO string
    
    let fechaAhora = new Date();
    
    console.log(fechaAhora.toISOString());

### Fecha local y UTC
    
    let local = new Date();
    let utc = new Date();
    
    console.log(local);
    console.log(utc.toISOString());

### Formateo personalizado
    
    function fechaFormateada(Fech){
        let dia = Fech.getDate();
        let mes = Fech.getMonth();
        let year = Fech.getFullYear();
        let horas = Fech.getHours();
        let minutos = Fech.getMinutes();
        let seg = Fech.getSeconds();
    
        let resultado = dia+"/"+mes+"/"+year+" "+horas+":"+minutos+":"+seg;
    
        return resultado;
    }
    
    let fecha = new Date();
    
    console.log(fechaFormateada(fecha));

### Internacionalización
    
    let fechaActu = new Date();
    
    let fechaFormateadaEs = new Intl.DateTimeFormat("es-ES").format(fechaActu);
