const twoSum = (nums, target) => {
  // so here we are storing the value of nums and their indices into the arr variable
  const arr = nums
    .map((val, index) => [val, index])
    .sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = arr.length - 1;
  // so  now we start our loop from both ends of the array
  while (left < right) {
    // so here what are storing the value of first element of an array and last element into the sum
    const sum = arr[left][0] + arr[right][0];
    // if the sum === target then we'll return the indices as soon as sum value
    // equivalent to target [arr[left][1],arr[right][1]] this will be the indices
    if (sum === target) {
      return [arr[left][1], arr[right][1]];
      // if sum will not be equal to target we will increment left 
    } else if (sum < target) {
      left++;
      // and else we will decrement the right from at the end
    } else {
      right--;
    }
  }
};

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
