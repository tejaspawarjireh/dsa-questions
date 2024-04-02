const twoSum = (nums, target) => {
  const arr = nums
    .map((val, index) => [val, index])
    .sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left][0] + arr[right][0];
    if (sum === target) {
      return [arr[left][1], arr[right][1]];
    } else if (sum < target) {
      left++;
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
