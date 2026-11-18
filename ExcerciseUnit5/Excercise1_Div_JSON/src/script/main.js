/**
 * Author: ProfitCoder
 * Date: 18/11/2026
 */

    //JSON Imported From Class

    const colors = 
    {
        "colors": [
            {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,255,255,1],
                "hex": "#000"
                }
            },
            {
            "color": "white",
            "category": "value",
            "code": {
                "rgba": [0,0,0,1],
                "hex": "#FFF"
                }
            },
            {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,0,0,1],
                "hex": "#F00"
                }
            },
            {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [0,0,255,1],
                "hex": "#00F"
                }
            },
            {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,255,0,1],
                "hex": "#FF0"
                }
            },
            {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
                "rgba": [0,255,0,1],
                "hex": "#0F0"
                }
            }
        ]
    }

    const principal = document.querySelector("body");

    for(const colores of colors.colors)
    {
        const divNow = document.createElement("div");

        divNow.style.backgroundColor = colores.code.hex;
        divNow.style.textAlign = "center";
        divNow.style.borderRadius = "2%";
        divNow.style.boxShadow = "2px 2px 2px 2px black"
        
        if(colores.code.hex === "#000" || colores.code.hex === "#F00" || colores.code.hex === "#00F" )
        {   
            divNow.style.color = "white";
        }

        const p = document.createElement("p");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        
        p.textContent = colores.color;
        p1.textContent = colores.category + " " + colores.type;
        p2.textContent = colores.code.rgba;
        p3.textContent = colores.code.hex;

        divNow.appendChild(p);
        divNow.appendChild(p1);
        divNow.appendChild(p2);
        divNow.appendChild(p3);

        principal.appendChild(divNow);

    }

    