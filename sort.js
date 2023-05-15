// Sort the below array of employees in ascending order by age

// let employees = [ { firstName: 'John', lastName: 'Doe', age: 27, joinedDate: 'December 15, 2017' },
//                   { firstName: 'Ana', lastName: 'Rosy', age: 25, joinedDate: 'January 15, 2019' }, 
//                   { firstName: 'Zion', lastName: 'Albert', age: 30, joinedDate: 'February 15, 2011' }
//                  ];

function sortArray(){
let employees = [
  { firstName: 'John', lastName: 'Doe', age: 27, joinedDate: 'December 15, 2017' },
  { firstName: 'Ana', lastName: 'Rosy', age: 25, joinedDate: 'January 15, 2019' },
  { firstName: 'Zion', lastName: 'Albert', age: 30, joinedDate: 'February 15, 2011' }
];

employees.sort((a, b) => a.age - b.age);

console.log(employees);
}
sortArray();

