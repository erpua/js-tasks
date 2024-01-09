/*
 * Create the function factorial here
 */

function factorial(n) {
  // Step 1. Create a variable result to store num
  let result = n;
   
  // If num = 0 OR num = 1, the factorial will return 1
  if (n === 0 || n === 1) {
    return 1;
  };
     
  // Step 2. Create the WHILE loop 
  while (n > 1) { 
    n = n - 1; // decrementation by 1 at each iteration or (n--;)
    result = result * n; // or result *= num; 
    /* 
                     n           n - 1      let result        result = result * n         
    1st iteration:   5             4            5             result = result * 4 = 5 * 4 = 20      
    2nd iteration:   4             3           20             result = result * 3 = 20 * 3 = 60
    3rd iteration:   3             2           60             result = result * 2 = 60 * 2 = 120
    4th iteration:   2             1          120             result = result * 1 = 120 * 1 = 120
    End of the WHILE loop 
    
    */
  };
     
  // Step 3. Return the factorial of the provided integer
  return result; // 120
};

factorial(5);

/* 
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5); */