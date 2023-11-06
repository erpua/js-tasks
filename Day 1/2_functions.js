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
                    num           num--      var result      result *= num         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
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