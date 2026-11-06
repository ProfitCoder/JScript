/**
 * Author: ProfitCoder
 * Date: 05/11/2026
 */

    const line = document.querySelector('input[name="line"]');
    const respLowercase = document.getElementById('number1');
    const respUppercase = document.getElementById('number2');
    const respLength = document.getElementById('number3');

    line.addEventListener('input',prove);
        
    function prove()
    {
        const value = line.value;

        // Validar si tiene al menos una minúscula
        let RegLower = /[a-z]/;
        let RegUpper = /[A-Z]/;
        
        if (RegLower.test(value)) 
        {
            respLowercase.style.color = 'green';
        } 
        else 
        {
            respLowercase.style.color = '#ffe5ba';
        }

        // Validar si tiene al menos una mayúscula
        if (RegUpper.test(value)) 
        {
            respUppercase.style.color = 'green';
        } 
        else 
        {
            respUppercase.style.color = '#ffe5ba';
        }

        // Validar si tiene un mínimo de 6 caracteres
        if (value.length >= 6) 
        {
            respLength.style.color = 'green';
        } 
        else 
        {
            respLength.style.color = '#ffe5ba';
        }
    };