// Aufgabe Produkt

class Product{
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toText() {
    return `${this.name} ${this.price}€. Enthält ${this.price * 0.19}€ MwSt. (19%).`
  }
  containedVAT() {
    return `${this.price * 0.19}€ MwSt`
  }
}

const trainingsanzug = new Product("Adidas Trainingsanzug", 150);
console.log(trainingsanzug);
console.log(trainingsanzug.toText());
console.log(trainingsanzug.containedVAT());

const schuhe = new Product("Puma Laufschuhe", 80);
console.log(schuhe);
const socken = new Product("Sockenset", 5);
console.log(socken);

