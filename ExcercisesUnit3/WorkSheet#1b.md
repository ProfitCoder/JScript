# Arrow functions

## Two arguments

    const suma = (num1,num2) => num1 + num2;

## One argument

    const stringLengt = (str) => console.log(`the length of "${str}" is:`, str.length);

## One argument, pt.2

    const stringLength = (str) => console.log(`the length of "${str}" is:`, str.length) 
    return str.length;

## One argument

    let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
    
    const showAlerts = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);

