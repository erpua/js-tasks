/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  let modifiedArray = [];
  
  nums.map(number => {
      if(number % 2 === 0) {
          number = number * 2;
          modifiedArray.push(number);
      } else {
          number = number * 3;
          modifiedArray.push(number);
      }
  })
  
  console.log('modifiedArray => ', modifiedArray);
  return modifiedArray;
};

modifyArray([1,2,3,4,5]);