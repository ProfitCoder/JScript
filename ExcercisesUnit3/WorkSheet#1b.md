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

## Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old.

    const info = (nombre,edad) => console.log('Hello, I am ${nombre}, and I am ${edad}');

## Write an arrow function that takes an array of integers, and returns the sum of the elements in the array. Google and use the built-in reduce array method for this.

    const sumar = numeros => numeros.reduce((total, numero) => total + numero, 0);
    
    console.log(sumar([1, 2, 3, 4]));

## The syntax of this function is wonky. Can you fix it to use the shortest arrow function possible?

    let eye = "eye";
    
    const fire = () => `bulls-`;
                                
## Refactor the following ES5 function to use an arrow function:

    const fibonacci = n => {
        if (n < 3) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
    };
    
    console.log(fibonacci(6));
