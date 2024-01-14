// first method
/* function getSecondLargest(nums) {
    // Complete the function
    let firstLargestNumber = 0;
    let secondLargestNumber = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > firstLargestNumber) {
            secondLargestNumber = firstLargestNumber;
            firstLargestNumber = nums[i];
        } else if(nums[i] < firstLargestNumber && nums[i] > secondLargestNumber) {
            secondLargestNumber = nums[i];
        }
    }
    console.log(' secondLargestNumber => ', secondLargestNumber);
    return secondLargestNumber;
}

getSecondLargest([2,3,6,6,5]);

//........................... 2
firstLargestNumber = 0;
secondLargestNumber = 0;
if(2 > 0) {
  secondLargestNumber = firstLargestNumber = 0;
  firstLargestNumber = 2;
}
//........................... 3
firstLargestNumber = 2;
secondLargestNumber = 0;

if(3 > 2) {
  secondLargestNumber = firstLargestNumber = 2;
  firstLargestNumber = 3;
}

//........................... 6
firstLargestNumber = 3;
secondLargestNumber = 2;
if(6 > 3) {
  secondLargestNumber = firstLargestNumber = 3;
  firstLargestNumber = 6;
}

//........................... 6
firstLargestNumber = 6;
secondLargestNumber = 3;

if(6 > 6) {
  // no actions
} else if(6 < 6 && 6 > 3) {
    // no actions
}

//........................... 5

if(nums[i] > firstLargestNumber) {
            secondLargestNumber = firstLargestNumber;
            firstLargestNumber = nums[i];
        } else if(nums[i] < firstLargestNumber && nums[i] > secondLargestNumber) {
            secondLargestNumber = nums[i];
        }

firstLargestNumber = 6;
secondLargestNumber = 3;

if(5 > 6) {
    // no actions
} else if (5 < 6 && 5 > 3) {
    secondLargestNumber = 5;
} */

/* function findSecondLargest(arr) { 
    let firstLargestNumber;
    let secondLargestNumber; 
  
    // There should be at least two elements 
    if (arr.length < 2) { 
        return "There not enough elements in array for this function"; 
    } 
  
    // Sort the array in ascending order 
    arr.sort(); 
  
    // Start from the second last element as  
    // the largest element is at last 
    for (let i = arr.length - 2; i >= 0; i--) { 
        // If the element is not equal to the  
        // largest element 
        if (arr[i] !== arr[arr.length - 1]) { 
            return "The second largest element is " + arr[i]; 
        } 
    } 
  
    return "There is no second largest element"; 
} 
  
// Driver program to test the function 
const arr = [12, 35, 10, 35, 10, 34, 1]; 
  
// Output: The second largest element is 34 
console.log(findSecondLargest(arr)); */

function findSecondLargest(nums) {
    let largestNumber = nums[0];
    let secondLargestNumber = 0;

  for (let i = 1; i < nums.length; i++) {
    console.log('nums[i] =>', nums[i]);

      if (nums[i] > largestNumber) {
        secondLargestNumber = largestNumber;
        largestNumber = nums[i];
      } else if (nums[i] < largestNumber && nums[i] > secondLargestNumber) {
        secondLargestNumber = nums[i];
      }
    }
    
    return secondLargestNumber;
  };

  // Example usage:
  const array = [5, 2, 10, 8, 3];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);

