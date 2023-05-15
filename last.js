// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

function getLastElements(arr, n) {
  if (n === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-n);
  }
}
let array = [1, 2, 3, 4, 5];

console.log(getLastElements(array));      // Output: 5
console.log(getLastElements(array, 2));   // Output: [4, 5]
console.log(getLastElements(array, 3));   // Output: [3, 4, 5]
