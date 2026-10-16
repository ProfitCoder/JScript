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

