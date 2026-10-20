# JS-Intro-OOP-Exercises

## The Cat

    class cat
    {
        
        tiredness = 50;
        hunger = 50;
        loneliness = 50;
        happiness = 50;
    
        constructor(levelTired, levelHunger, levelLoneliness, levelHapiness)
        {
            this.tiredness = levelTired;
            this.hunger = levelHunger;
            this.loneliness = levelLoneliness;
            this.happiness = levelHapiness;
        }
    
        getHapiness()
        {
            return this.happiness;
        }
    
        pet()
        {
            this.happiness += 20;
            this.loneliness -= 20;
        }
    
        feed()
        {
            this.hunger -= 60;
        }
    
        sleep()
        {
            this.tiredness -=100;
            this.loneliness += 30;
        }
    
        walkOut()
        {
            this.happiness += 100;
            this.tiredness += 30;
            this.loneliness -= 100;
            this.hunger += 20;
        }
    
        howsCat()
        {
    
            let howsCatNow = "The cat Right now is";
    
            if(this.tiredness >= 50)
            {
                howsCatNow += " soooooooo tired,";
            }
            else
            {
                howsCatNow += " pretty entreteined,";
            }
    
            if(this.hunger >= 50)
            {
                howsCatNow += " hungry,";
            }
            else
            {
                howsCatNow += " pretty full,";
            }
    
            if(this.loneliness >= 50)
            {
                howsCatNow += " feels so alone,";
            }
            else
            {
                howsCatNow += " have some company,";
            }
    
            if(this.happiness >= 50)
            {
                howsCatNow += " VERY HAPPY.";
            }
            else
            {
                howsCatNow += " very sad.";
            }
    
            console.log(howsCatNow);
        }
    
    }

## The Reading List

    class Book
    {
        constructor(title, genre, author) {
            this.title = title;
            this.genre = genre;
            this.author = author;
            this.read = false;
            this.readDate = null;
        }
    }
    
    class BookList
    {
        
        constructor()
        {
            this.booksRead = 0;
            this.booksNotRead = 0;
            this.nextBook = null;
            this.currentBook = null;
            this.lastBook = null;
            this.books = [];
        }
    
        add(book)
        {
            this.books.push(book);
        }
    
        finishCurrentBook()
        {
            if(this.currentBook === null)
            {
                console.log("Ahora mismo no esta leyendo ningun libro.");
            }
            else
            {
                this.currentBook.read = true;
            }
    
            this.currentBook.readDate = new Date(Date.now());
    
            this.lastBook = this.currentBook;
            this.currentBook = this.nextBook;
    
        }
    }
