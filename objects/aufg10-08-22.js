// Aufgabe 1

// Erstelle ein Objekt lege es in einer Variable namens `bankkonto` ab. Das Objekt soll folgende Eigenschaften haben:
// -   `kontostand`, eine `Number` die den aktuellen Kontostand enthält.
// -   `iban`, ein `String` mit der IBAN des Bankkontos.
// -   `bankname`, ein `String` mit dem Namen der Bank.
// -   `kontoinhaber`, ein `String` mit dem Vor- und Nachnamen des Kontoinhabers
// Außerdem soll das Bankkonto folgende Methoden besitzen:
// -   `abheben`, eine Methode die als Parameter einen Betrag x erhält und ihn vom Kontostand abzieht. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich abgehoben. Der neue Kontostand ist y€`
// -   `einzahlen`, eine Methode die als Parameter einen Betrag x erhält und ihn zum Kontostand addiert. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich eingezahlt. Der neue Kontostand ist y€`
// - `zeigInfo`, eine Methode ohne Parameter, welche auf der Konsole folgenden String ausgibt: `Dies ist eine Konto der x Bank. Die IBAN dieses Kontos lautet y.`
// ## Bonus
// Erweitere die Methode `abheben` sodass sie den Kontostand nicht verändert und ausgibt: `x€ konnte nicht abgehoben werden.`, falls der Kontostand nicht ausreicht.

const bankkonto = {
    Kontostand: 700,
    iban: "DE12 3456 7890 1234 00",
    Bankname: "Deutsche Bank",
    Kontoinhaber: "Rahman Ertuerk",
    abheben: function(abgehobenerbetrag){
        this.Kontostand = this.Kontostand - abgehobenerbetrag;
        if(this.Kontostand < 0){
            return `${abgehobenerbetrag}€ konnte nicht abgehoben werden.`
        }
        return `${abgehobenerbetrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.Kontostand}€.`
    },
    einzahlen: function(eingezahlterbetrag){
        this.Kontostand = this.Kontostand + eingezahlterbetrag; 
        return `${eingezahlterbetrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.Kontostand}€.`
    },
    zeigInfo: function(){
        return `Dies ist eine Konto der ${this.Bankname}. Die IBAN dieses Kontos lautet ${this.iban}.`
    }
}

// console.log(bankkonto.abheben(750));
// console.log(bankkonto.einzahlen(150));
// console.log(bankkonto.zeigInfo())



// Aufgabe 2

// Erstelle das folgende Objekt:
// Erstelle eine Methode, die das Folgende ausgibt: "John smith is a student in class 12"

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12, 
    whoIsThis: function(){
        console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}.`)
    }, 
};

student.whoIsThis()

// 2: Erstelle ein person object. Füge den Vor- und Nachnamen, das Alter, den Beruf, die Stadt usw. der Person hinzu. Erstelle eine Methode, um Daten aus dem Objekt zu drucken, z.B. “John Smith is a 41 year old engineer living in France”.
// Bonus
// Schreibe eine Methode, um die Länge des person objects zu ermitteln.

const person = {
    firstName: "Martin",
    lastName: "Reacher",
    age: 35,
    job: "web developer",
    city: "Berlin",
    whoIsThis: function(){
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}.`)
    },
    getObjectLength: function(){
        return Object.keys(this).length;
    }
}

person.whoIsThis();
console.log(person.getObjectLength());


// Dein eigenes Math Objekt.
// Erstelle ein neues Objekt und lege es in einer Variable mit dem namen MyMath ab.
// Das Objekt soll die Methoden ceil, floor, pow, sqrt und abs des Math Objekts besitzen.
// Die Methoden sollen sich genau so verhalten wie die echten Math Methoden.
// Beispiel:
// MyMath.ceil(2.4) // Gibt 3 zurück
// MyMath.floor(2.4) -> // Gibt 2 zurück
// MyMath.pow(2,3) ->// Gibt 8 zurück
// MyMath.sqrt(16) -> // Gibt 4 zurück
// MyMath.abs(-1) -> // Gibt 1 zurück
// MyMath.abs(1) -> // Gibt 1 zurück
// Leicht: Verwende das Math Objekt um diese Aufgabe zu lösen
// Schwer: Überlege selbst wie du die Methoden implementieren kannst (edited) 

const myMath = {
    ceil: function(number){
        console.log(parseInt(number) + 1); 
    },
    floor: function(number){
        console.log(parseInt(number));
    },
    pow: function(num1, num2){
        let num3 = num1
        for(let i = 1; i < num2; i++){
            num3 *= num1
        }
        console.log(num3)
    },
    sqrt: function(number) {
        for(let i = 0; i < number; i++){
            if(i * i === number) {
                console.log(i)
            } 
        }
    },
    abs: function(number){
        if(number < 0){
            return number = number * -1;
        }
        return number;
    }
}

myMath.ceil(2.4)
myMath.floor(2.8)
myMath.pow(3, 3)
myMath.sqrt(25)
console.log(myMath.abs(-25)); 