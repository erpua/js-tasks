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

 /*  perimeter() { 
    let polygonPerimeter = this.polygonSides.reduce((accumulator, currentValue) => 
        accumulator + currentValue,
       0,  
    );
    return polygonPerimeter;
  }; */

};

Polygon.prototype.perimeter = function() { 
  let polygonPerimeter = this.polygonSides.reduce((accumulator, currentValue) => 
      accumulator + currentValue,
     0,  
  );
  return polygonPerimeter;
};

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

// https://docs.github.com/en/enterprise-server@3.8/get-started/using-git/pushing-commits-to-a-remote-repository
// The git push command takes two arguments:

/* 

A remote name, for example, origin
A branch name, for example, main
For example:

git push REMOTE-NAME BRANCH-NAME
As  an example, you usually run git push origin main to push your local changes to your online repository.

*/

// Loose equality
console.log(1 == '1');
// true

// Strict equality
console.log(1 === '1');
// false