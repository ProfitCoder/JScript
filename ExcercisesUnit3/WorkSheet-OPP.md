# OOP Exercises

## TASK 1

    class Person
    {
        name;
        age;
        stomach = [];
        contador = 0;
    
        constructor(nombreIntro, edadIntro)
        {
            this.name = nombreIntro;
            this.age = edadIntro;
        }
    
        eat(food)
        {
            this.stomach.push(food);
        }
        
        hungry()
        {
            this.stomach.length = 0;
        }
    
        whoIsMe()
        {
            let info = this.name+","+this.age;
            return info;
        }
    }

## TASK 2

    class Car
    {
        model;
        milesPerGallon;
        tank = 0;
        adometer = 0;
    
        constructor(modeloCoche, milesPerGallonIntro)
        {
            this.model = modeloCoche;
            this.milesPerGallon = milesPerGallonIntro;
        }
    
        fill(number)
        {
            if(number <= 100 && number >= 0)
            {
                this.tank += number;
            }
        }
    
        drive(distance)
        {
            this.odometer = distance;
            this.tank -= (distance/this.milesPerGallon);
    
            if(this.tank <= 0)
            {
                console.log("I ran out of gas at "+this.odometer+" km");
            }
        }
    
        fuel()
        {
            console.log("Actualmente tienes "+Math.round(this.tank,2)+" galones en el tanque.");
        }
    }
