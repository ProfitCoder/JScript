# Ejercicios de JavaScript: Cookies

## Ejercicio 1 — Crear una cookie

    document.cookie = "nombre = Pablo";

## Ejercicio 2 — Crear varias cookies

    document.cookie = "nombre = Pablo";
    document.cookie = "edad = 19";
    document.cookie = "ciudad = Granada";
    
    console.log(document.cookie);

## Preguntas
### ¿Cómo aparecen separadas las diferentes cookies?

    Las diferentes cookies están separadas por ";".

### ¿Se muestran en el mismo orden en el que las has creado?

    Sí, las cookies se guardan en el mismo orden en el que las instancias.

### ¿Qué ocurre si vuelves a cargar la página?

    Al estar creadas desde código no cambia, se quedan guardadas estas.

