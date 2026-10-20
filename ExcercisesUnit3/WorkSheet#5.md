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


## The Game (advanced)

        class Card {
        constructor(value, suit) {
            this.value = value;
            this.suit = suit;
        }
    }
    
    class Player {
        constructor(name) {
            this.name = name;
            this.wins = 0;
            this.losses = 0;
            this.cards = [];
        }
    }
    
    class Game {
        constructor() {
            this.players = [];
            this.state = "Sin empezar";
        }
    
        join(player) {
            if (this.players.length < 2) {
                this.players.push(player);
            } else {
                console.log("Ya hay dos jugadores");
            }
        }
    
        turn() {
            if (this.players.length !== 2) {
                console.log("Necesitas dos jugadores");
            }
            else
            {
                this.state = "Jugando";
    
                const player1 = this.players[0];
                const player2 = this.players[1];
    
                // Valores entre 2 y 14. El 14 representa el as.
                const value1 = Math.floor(Math.random() * 13) + 2;
                const value2 = Math.floor(Math.random() * 13) + 2;
    
                // Palos diferentes para que no salga la misma carta.
                const card1 = new Card(value1, "Corazones");
                const card2 = new Card(value2, "Picas");
    
                player1.cards = [card1];
                player2.cards = [card2];
    
                console.log(player1.name + ": " + card1.value + " de " + card1.suit);
                console.log(player2.name + ": " + card2.value + " de " + card2.suit);
    
                if (card1.value > card2.value) {
                    player1.wins++;
                    player2.losses++;
    
                    console.log(player1.name + " ha ganado");
                    console.log(player2.name + " ha perdido");
                } else if (card2.value > card1.value) {
                    player2.wins++;
                    player1.losses++;
    
                    console.log(player2.name + " ha ganado");
                    console.log(player1.name + " ha perdido");
                } else {
                    console.log("Empate");
                }
    
                this.state = "Terminada";
            }   
        }
    
        results()
        {
            console.log(player1.name+" has "+player1.wins+" and "+player2.name+" has "+player2.wins);
        }
    }


### Creamos los jugadores.

    const player1 = new Player("Pablo");
    const player2 = new Player("Jose");

### Creamos la partida y añadimos los jugadores.

    const game = new Game();
    game.join(player1);
    game.join(player2);

### Jugamos una ronda.

    game.turn();

### Consultamos las victorias.

    game.results()
