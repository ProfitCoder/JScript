//Validación de Formularios

// validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula

let ExpresReg = /^[A-Z]+/ ;

if(ExpresReg.test("Cadena"))
{
    console.log("La expresión cumple regex");
}
else
{
    console.log("La expresión no cumple regex");
}

// validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&

let ExpresReg2 = /^[\!\@\#\$\%\^\&]/;

if(ExpresReg2.test("@Cadena"))
{
    console.log("La expresión cumple regex");
}
else
{
    console.log("La expresión no cumple regex");
}

// validarCorreo: El parámetro debe tener el formato correcto de un email

let EmailReg = /^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,6}$/;

if(EmailReg.test("ejemplo@gmail.com"))
{
    console.log("La expresión cumple regex");
}
else
{
    console.log("La expresión no cumple regex");
}

// validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito

let TarjetaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6[0-9]{15}|(?:2131|1800|35\d{3})\d{11})$/;

let numeroUsuario = "4123 4567 8901 2345";

let numeroLimpio = numeroUsuario.replace(/\s+/g, ""); 

if(TarjetaRegex.test(numeroLimpio))
{
    console.log("La expresión cumple regex");
}
else
{
    console.log("La expresión no cumple regex");
}

// validarLongitud: El parámetro debe tener al menos 8 caracteres.

let RegexLongitud = /^[a-zA-Z0-9\s]{8,}$/;

if(RegexLongitud.test("Hola tiene 8 caracteres"))
{
    console.log("La expresión cumple regex");
}
else
{
    console.log("La expresión no cumple regex");
}

// validarNumero: El parámetro debe contener al menos un dígito.

let RegexNum = /[0-9]+/;

if(RegexNum.test("7 caracteres"))
{
    console.log("La expresión cumple regex");
}
else
{
    console.log("La expresión no cumple regex");
}