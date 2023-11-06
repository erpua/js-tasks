function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const r = readLine();
  const PI = Math.PI;
  
  // Print the area of the circle:
  const exponenta = Math.pow(r, 2);
  console.log(PI * exponenta);
  
  // Print the perimeter of the circle:
  console.log(PI * r * 2);
  
  try {    
      // Attempt to redefine the value of constant variable PI
      PI = 0;
      // Attempt to print the value of PI
      console.log(PI);
  } catch(error) {
      console.error("You correctly declared 'PI' as a constant.");
  }
};