console.log('Hello, world!');
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