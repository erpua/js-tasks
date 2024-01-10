// first method
function getSecondLargest(nums) {
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