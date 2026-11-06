/**
 * Author: ProfitCoder
 * Date: 04/11/2026
 */

    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", recogerValor);

    function recogerValor(e) {
        e.preventDefault();
        document.getElementById("WhatHp").className = "error";

        document.getElementById("WhatHp").innerHTML = "";

        const name = document.getElementById("name").value.trim();
        const firstname = document.getElementById("FirstName").value.trim();
        const dni = document.getElementById("dni").value.trim();
        const phone = document.getElementById("Phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();

        //Validacion nombre
        let NameReg = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,}$/;

        if(!NameReg.test(name))
        {
            document.getElementById("WhatHp").innerHTML += "<br>El formato del nombre no tiene el formato indicado ('Minimo 3 caracteres')";
        }

        //Validacion nombre
        let FNameReg = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,}$/;

        if(!FNameReg.test(firstname))
        {
            document.getElementById("WhatHp").innerHTML += "<br>El formato del apellido no tiene el formato indicado ('Minimo 3 caracteres')";
        }
        //Validacion nombre
        let DniReg = /^[0-9]{8}[A-Z]$/;

        if(!DniReg.test(dni))
        {
            document.getElementById("WhatHp").innerHTML += "<br>El formato del dni no tiene el formato indicado (8 numeros y 1 letra)";
        }
        //Validacion nombre
        let PhoneReg = /^\+[0-9]{11}$/;

        if(!PhoneReg.test(phone))
        {
            document.getElementById("WhatHp").innerHTML += "<br>El formato del Telefono no tiene el formato indicado ('11 numeros')";
        }
        //Validacion nombre
        let EmailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!EmailReg.test(email))
        {
            document.getElementById("WhatHp").innerHTML += "<br>El formato del nombre no tiene el formato indicado (example@gmail.com)";
        }

        //Validacion username
        let ExpresReg = /^[a-zA-Z0-9.]{8,}$/;

        if(!ExpresReg.test(username))
        {
            document.getElementById("WhatHp").innerHTML += "<br>El formato del nombre de usuario no tiene el formato indicado ('Minimo 8 caracteres')";
        }

        if (document.getElementById("WhatHp").innerHTML === "") 
        {
            document.getElementById("WhatHp").className = "correcto";
            document.getElementById("WhatHp").innerHTML ="Todo ha salido bien.";
        }

    };
