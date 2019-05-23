// See the javascript Object Oriented repo for more info about Object literals!!

// This defines a object literal:
// const person = {

// }

//////////////////////////////////////////////////////////////////////////

// const person = {
//     // In here you can put key-value pairs:
//     firstName: 'Philip'
// }

// // Access this property:

// let val;

// val = person;

// console.log(val); // logs the whole object

// // Or get specific value:
// // This is the recommended way:
// val = person.firstName; 

// // Or you can use (not recommended):
// val = person['firstName'];

// console.log(val); // logs Philip

//////////////////////////////////////////////////////////////////////////

// Lets use more types and values:

// const person = {
//     // In here you can put key-value pairs:
//     firstName: 'Philip',
//     lastName: 'Andes',
//     age: 30,
//     email: 'philip@andes.com',
//     hobbies: ['Music', 'Foods'], // We can use array's
//     // Embedded objects:
//     address: {
//         city: 'Breda',
//         country: 'Netherlands'
//     },
//     // functions:
//     getBirthYear: function(){
//         return 1988;
//     }
// }

// let val;

// val = person.age;

// console.log(val); // logs 30

// // array:
// val = person.hobbies; // the full array

// // for foods:
// val = person.hobbies[1]; // the second value in the array (foods)

// // Address object:
// val = person.address; // full address

// val = person.address.city; // city only

// // function:
// val = person.getBirthYear();

// console.log(val);

//////////////////////////////////////////////////////////////////////////

// Within object we can access other properties:
// lets say for the birthyear we want to calculate this,
// we going to return 2019 (current year)
// Take away the age
// to access this, we need to use the 'this' keyword:

const person = {
    // In here you can put key-value pairs:
    firstName: 'Philip',
    lastName: 'Andes',
    age: 30,
    email: 'philip@andes.com',
    hobbies: ['Music', 'Foods'], // We can use array's
    // Embedded objects:
    address: {
        city: 'Breda',
        country: 'Netherlands'
    },
    // functions:
    getBirthYear: function(){
        return 2019 - this.age; // 2019 - 30 = 1989
    }
}

let val;

val = person.age;

console.log(val); // logs 30

// array:
val = person.hobbies; // the full array

// for foods:
val = person.hobbies[1]; // the second value in the array (foods)

// Address object:
val = person.address; // full address

val = person.address.city; // city only

// function:
val = person.getBirthYear();

console.log(val);

//////////////////////////////////////////////////////////////////////////

// Arrays of objects:
// You can use multiple objects in one array
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

// And then loop through this with a for loop:
// make a var called i and set it to 0
// As long the var i is smaller then the people array.length (which is 1 atm)
//then count +1 on the var i
for(let i = 0; i < people.length; i++){
    // log the people array with the current iteration (which is i)
    // and get the name only:
    console.log(people[i].name); // John Mike
}