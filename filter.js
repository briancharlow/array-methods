// Write a JavaScript function to filter false, null, 0 and blank values from an array.

function filterFalsyValues(arr) {
  let filteredArray = arr.filter((value) => {
    return value !== false && value !== null && value !== 0 && value !== '';
  });

  return filteredArray;
}
let array = [false, 1, null, '', 2, 0, 3, 'hello', ''];

let filteredArray = filterFalsyValues(array);
console.log(filteredArray);
