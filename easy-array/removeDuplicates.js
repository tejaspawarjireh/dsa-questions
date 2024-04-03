// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


const removeDuplicates = (arr) => {
    // here in i we will get last element of an array
  let i = arr.length - 1;
  // we will iterate all the elements until it will be more than 0
  while(i > 0) {
    // if last element of array and second last element of array is === then remove it using splice
    // and continue iteration
    if(arr[i] === arr[i - 1]) {
        arr.splice(i,1);
    }
    i--
  }
  // return the length of remaining arr
  return arr.length

  // here we will store all the unique value count by default will be 1
let count = 1;
// we will iterate all the element using for loop
for(let i = 1; i < arr.length; i++) {
    // if first element of an arr is not equal to count (0)
    // if it is not equal to count then we will add that value into arr[count] and increment by 1 count
    // and return the count
    if(arr[i] !== arr[count - 1]) {
        arr[count] = arr[i];
        count++
    }
}
return count
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))