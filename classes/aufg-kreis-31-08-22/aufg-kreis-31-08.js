class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getPerimeter() {
    return 2 * (Math.PI * this.radius);
  }
}

let circy1 = new Circle(11);
console.log(circy1.getArea()); // Should return 380.132711084365

let circy2 = new Circle(4.44);
console.log(circy2.getPerimeter()); // Should return 27.897342763877365
