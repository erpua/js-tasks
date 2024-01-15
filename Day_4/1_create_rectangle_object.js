/*
 * Complete the Rectangle function
 */
/* function Rectangle(a, b) {
    
  const rectangleObject = {
      length: a,
      width: b,
      perimeter: 2*(a+b),
      area: a*b
  };
  
  return rectangleObject;
}; */

function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2*(a+b);
  this.area = a*b;
  Object.freeze(this);
};

