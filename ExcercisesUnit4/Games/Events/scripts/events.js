/**
 * Author: ProfitCoder
 * date: 21/10/2026
 */


function buttonClicked()
{
    console.log("hi");
    document.body.style.backgroundColor = "red";
}

function mouseOver()
{
    console.log("Encima");
}

function removeMouseover()
{
    btn.removeEventListener("mouseover", mouseOver);
}

let btn = document.getElementById("firstButton");
let offBtn = document.getElementById("offBtn");

btn.addEventListener("click", buttonClicked);
btn.addEventListener("mouseover", mouseOver);

offBtn.addEventListener("click", removeMouseover);