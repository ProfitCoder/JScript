/**
 * Author: ProfitCoder
 * Date: 23/10/2026
 */


let elemnt = document.getElementById("FInstr");

const caracteres = ['a','b','c','d','e','f','g','h','i','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

let randomLetra = caracteres[Math.floor(Math.random() * caracteres.length)];

elemnt.innerHTML = "Touch the " + randomLetra;

document.addEventListener("keydown",pulsa);

function pulsa(event)
{
    if(event.key === randomLetra)
    {
        elemnt.innerHTML = "Letra correcta";
    }
    else
    {
        elemnt.innerHTML = "Letra incorrecta";
    }
}