/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    
  constructor(polygonSides){
     this.polygonSides = polygonSides;
  }
  
 /*  perimeter() {
      let polygonPerimeter = 0;
      
      for(let side of this.polygonSides) {
          polygonPerimeter = polygonPerimeter + side;
      };
      
      return polygonPerimeter;
  } */

  /* perimeter() {   
    return this.polygonSides.reduce((accumulator, currentValue) => {
      accumulator + currentValue
    }, 0 );
  } */

  perimeter() { 
    let polygonPerimeter = this.polygonSides.reduce((accumulator, currentValue) => 
        accumulator + currentValue,
       0,  
    );
    return polygonPerimeter;
  };

};

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

// https://docs.github.com/en/enterprise-server@3.8/get-started/using-git/pushing-commits-to-a-remote-repository