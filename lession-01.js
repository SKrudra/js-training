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
const curriedLargerThan = (num, word) => word.length > num; // function definition curried with two arguments

const largerThanFive = largerThan(5); // assigning function to a veriable
const largeWords = words.filter(largerThanFive); // calling function by the reference name
// output
console.log(largeWords);

const largeWords2 = words.filter(word => curriedLargerThan(5, word)); // calling curried function inside filter
// output
console.log(largeWords2); 


// ------------------------example-4-----------------------------
const camelWord = word =>  `${word.charAt(0).toUpperCase()}${word.slice(1)}`; // function defintion to convert a word int camel-case
const camelSentence = (sentence, word) => `${sentence}${camelWord(word)}`; // function definition to combine a sentence and a function

// input
const words1 = ['de', 'Lorean'];
const phrase = words1.reduce(camelSentence, "Sandeep and his ");
console.log(phrase);

// ------------------------example-5-----------------------------
const reducer = (acc, [key, value]) => ({...acc, [key]: value}); // function definition to converte array of [key, value] into an object/accumulator of key: value

// input
const badGuys = [
    ["bufard", "the guy from 1980"],
    ["biff", "the guy from 1985"],
    ["griff", "the guy from 1990"],
]

const evilObject = badGuys.reduce(reducer, {});
// output
console.log(evilObject);
// {
//     bufard: 'the guy from 1980',
//     biff: 'the guy from 1985',
//     griff: 'the guy from 1990'
// }


// ------------------------example-6-----------------------------
// compose function
// individual function definitions
const addOne = x => x + 1;
const duplicate = x => x * 2;
const square = x => x * x;
// definition of a compose function with above individual functions
function compose(...functions) {
    return (args) => {
        return functions.reduce(
            (acc, fn) => fn(acc), args
        );
    }
}
const calculate = compose(addOne, duplicate, square); // call compose function and assign to a variable

const calculateValue = calculate(1);
console.log(calculateValue);

const calculateValues = [1, 2, 3].map(calculate);
console.log(calculateValues);
