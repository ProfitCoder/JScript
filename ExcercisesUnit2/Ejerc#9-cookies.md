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

## Ejercicio 3 — Modificar una cookie

    document.cookie = "nombre = Juan";
    document.cookie = "nombre = Pablo";
    
    console.log(document.cookie);

## Pregunta

### ¿Qué ocurre cuando creamos una cookie utilizando un nombre que ya existe?

    Lo que ocurre es que la primera cookie se borra, haciendo asi que el valor guardado en su lugar el último valor introducido para esa cookie.
