// custom functions to use with map() function

// ------------------------example-1-----------------------------
const upperCase = word => word.toUpperCase(); // function definition to convert the string into upper case

// input
const words = ['sandeep', 'kumar'];
// apply the upperCase function
const capitalized = words.map(upperCase);
// output
console.log(capitalized); // ['sandeep', 'kumar']

// ------------------------example-2-----------------------------
const extractValue = ([key, value]) => value; // function definition to extract only values of an object

// input
const travelData = {
    name: 'sandeep',
    age: 32,
    car: 'toyota camry'
}

// get the object properties into the array of key-value pairs
const travelArray = Object.entries(travelData); // [ [ 'name', 'sandeep' ], [ 'age', 32 ], [ 'car', 'toyota camry' ] ]

// apply the extractValue function
const flatArray = travelArray.map(extractValue);

// output
console.log(flatArray); // [ 'sandeep', 32, 'toyota camry' ]



// ------------------------example-3-----------------------------
// partials & curring
const largerThan = num => word => word.length > num; // function definition to expect a number and pass it to anther function to check the string length againt that number
// const curriedLargerThan = (num, word) => word.length > num;

const largerThanFive = largerThan(5);
const largeWords = words.filter(largerThanFive);
//output
console.log(largeWords);

// const largeWords2 = words.filter(4, word => curriedLargerThan);
// console.log(largeWords2); 