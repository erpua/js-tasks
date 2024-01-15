/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
  const rectangleObject = {
      length: a,
      width: b,
      perimeter: 2*(a+b),
      area: a*b
  };
  
  return rectangleObject;
};

