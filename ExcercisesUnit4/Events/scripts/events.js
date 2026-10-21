/**
 * Author: ProfitCoder
 * date: 21/10/2026
 */


//Event for when someone push the button
function buttonClicked()
{
    console.log("hi");
}


//The correct form to use the button
let btn = document.getElementById("firstButton");

btn.addEventListener("click", buttonClicked);
btn.addEventListener("mouseover", ()=> console.log("Encima"));

