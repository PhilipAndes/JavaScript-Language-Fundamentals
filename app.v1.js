// 2 ways to create an array:
// First way:
// Array of numbers:
const numbers = [43, 56, 33, 23, 44, 36, 5];
// Seconds way is to use the Array Constructor and using the array object:
const numbers2 = new Array(22, 45, 33, 76, 54);

// Array of strings:
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

// Array Mixed:
// We can have booleans, undefined, null, objects, even date():
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// console.log(mixed);

//////////////////////////////////////////////////////////////////////////

let val;

// Get the array length:
val = numbers.length;

// Check if is array:
//val = Array.isArray(numbers); // true

// Get single value from array:
// use brackets and put in the position of the value you want.
// Array's start from 0!! 
//val = numbers[3]; // So 4th value in the array

// Insert into array:
//numbers[2] = 100; // Will switch the 3th value to 100

// Find index of value:
//val = numbers.indexOf(36); // 5

//////////////////////////////////////////////////////////////////////////

// Mutating arrays with different methods:

// Add on the end of the array:
//numbers.push(250); // 250 added on the end

// Add on the begin of the array:
//numbers.unshift(120); // 120 added at beginning

// Take off from the end of the array:
//numbers.pop(); // last number removed

// Take off from the beginning of the array:
//numbers.shift(); // first number removed

// Splice values
//numbers.splice(1,1); // take of 1 from index 1, so the second value is removed

// Lets say you want to remove the 3th and fourth value also:
//numbers.splice(1,3); // so start at index 1, remove 1, 2, 3

// Reverse the array:
//numbers.reverse();

// Concat array:
//val = numbers.concat(numbers2); // now we have an array with 12 values inside (numbers and numbers2 array merged)

// Sort array:
//val = fruit.sort(); // Will show in alphabetical order

// Sorting numbers is different:
//val = numbers.sort(); // it will sort the first number only, so 11 comes before 2

// So to fix this, you want to use the compare function:
// Pass in a function
// This function takes in 2 vars, x and y is popular or a and b:
// val = numbers.sort(function(x, y) {
//     return x - y;
// });

// or a reverse sort:
// val = numbers.sort(function(x, y) {
//     return y - x;
// });

// Find method:
// find actually takes in a testing function
function under50(num){
    return num < 50;
}

val = numbers.find(under50); // 43, because 43 is the first number under 50

// Or find method, over 50:
function over50(num){
    return num > 50;
}

val = numbers.find(over50); // 56 first number over 50


console.log(numbers);
console.log(val);
