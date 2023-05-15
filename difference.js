// Write a JavaScript function to find the difference between two arrays.

// Test Data:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

function difference(arr1, arr2) {
  let diff = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      diff.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      diff.push(arr2[i]);
    }
  }

  return diff;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
