/* Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method. */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filterArr = [];

    for (let i = 0; i < arr.length; i++){
     if (fn(arr[i], i)) {
         filterArr.push(arr[i]);
     }
    }

    return filterArr;
};

 // Example usage:
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function(n) { return n > 10; };
console.log(filter(arr1, greaterThan10)); // Output: [20, 30]


// 2626. Array Reduce Transformation
// Easy
// Companies
// Hint
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accum = init;
 
    for (let i=0; i<nums.length; i++) {
     accum = fn(accum, nums[i]);
    }

    return accum;
 };

 // Example usage:
const nums = [1, 2, 3, 4];
// const sum = (accum, curr) => accum + curr;
const init = 0;

// console.log(reduce(nums, sum, init)); 

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result = x;
        for (let i=functions.length-1; i>=0; i--)
            {
                result = functions[i](result);
            }
        return result;
    }
};

const functions = [x => x + 1, x => x * x, x => 2 * x];
const x = 4;
composedFn = compose(functions);
console.log(composedFn(x)); // Output: 65

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0; // Track the number of actual function calls

    const memoizedFn = (...args) => {
        const key = JSON.stringify(args); // Create a unique key for arguments

        if (cache.has(key)) {
            return cache.get(key); // Return cached result if exists
        }
        callCount++; // Increment call count for new function execution
        const result = fn(...args);
        cache.set(key, result); // Store result in cache
        return result;
    };

    memoizedFn.getCallCount = () => callCount; // Function to retrieve call count

    return memoizedFn;
}

// Example usage:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // Output: 4 (actual call)
console.log(memoizedSum(2, 2)); // Output: 4 (cached)
console.log(memoizedSum.getCallCount()); // Output: 1
console.log(memoizedSum(1, 2)); // Output: 3 (actual call)
console.log(memoizedSum.getCallCount()); // Output: 2

function timeLimit(fn, t) {
    return async function(...args) {
      return new Promise(async (resolve, reject) => {
        const timeout = setTimeout(() => reject("Time Limit Exceeded"), t);
        try {
          const result = await fn(...args);
          clearTimeout(timeout);
          resolve(result);
        } catch (err) {
          clearTimeout(timeout);
          reject(err);
        }
      });
    };
  }
  
  // Example Usage:
  const fn = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
  };
  
  const limited = timeLimit(fn, 50);
  
  limited(5)
    .then(result => console.log({"resolved": result}))
    .catch(error => console.log({"rejected": error, "time": 50}));

  /**
   * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = [];
    for (let i=0; i<arr.length; i++){        
        res.push(fn(arr[i], i));
    }
    return res;
};

function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let part = target - nums[i];
        
        if (map.has(part)) {
            return [map.get(part), i];
        }
        map.set(nums[i], i);
    }
    
    return [];
}

// Example Usage:
console.log(twoSum([2,7,11,15], 9)); // Output: [0,1]
console.log(twoSum([3,2,4], 6)); // Output: [1,2]
console.log(twoSum([3,3], 6)); // Output: [0,1]
