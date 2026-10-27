let caja = document.getElementById("caja");

let caja2 = document.getElementById("caja2");

caja.innerHTML = "";

let toque = 0;
let toque2 = 0;

caja.addEventListener("touchstart",(e)=> {
    e.preventDefault();
    console.log("Me has tocado los divs");
    caja.style.backgroundColor = "green";

    offsetX = e.touches[0].clientX - caja.offsetLeft;
    offsetY = e.touches[0].clientY - caja.offsetTop;
});


caja.addEventListener("touchend",(e)=>{
    e.preventDefault();
    console.log("Me los has dejado de tocar");
    caja.style.backgroundColor = "blue";

});

caja.addEventListener("touchmove",(e)=>{

    toque = e.touches[0];
    console.log("X: "+toque.clientX+", Y: "+toque.clientY);

    caja.style.left = `${toque.clientX - offsetX}px`;
    caja.style.top = `${toque.clientY - offsetY}px`;
});


const divGestos = document.getElementById("caja2");

let startX = 0;
let startY = 0;

divGestos.addEventListener("touchstart", (e)=> {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

divGestos.addEventListener("touchend", (e)=>{
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY

    let diffX = startX-endX;
    let diffY = startY-endY;

    if (Math.abs(diffX) < 30 && Math.abs(diffY) < 30) {
        return;
    }

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            console.log("Has deslizado hacia la izquierda");
        } else {
            console.log("Has deslizado hacia la derecha");
        }
    } else {
        if (diffY > 0) {
            console.log("Has deslizado hacia arriba");
        } else {
            console.log("Has deslizado hacia abajo");
        }
    }
})