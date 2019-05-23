// FOR LOOP:
// Use a for loop if you know how many times its gonna run, else use a while loop

// Takes in 3 parameters
// splitted by a semicolon
// First one is declaration of a variable (most of the time i or x but you can use anything)
// Second one is the condition
// Third one is an increment of i

// for(let i = 0; i < 10; i++){
//     console.log(`Number: ${i}`); // number 1 - 9 
// }

//////////////////////////////////////////////////////////////////////////

// Lets say when it hits nr 2, we want it to say something different like; 2 is my favorite number:

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log(`${i} is my favorite number`);
//     }
//     console.log(`Number: ${i}`);
// }
// This will output 2 is my favorite number and then Number: 2 also!

// To fix this you can use the continue statement:
// This will replace the Number: 2 by the statement:

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log(`${i} is my favorite number`);
//         continue;
//     }
//     console.log(`Number: ${i}`);
// }

// We also have break (which will break the loop, DUH!):

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log(`${i} is my favorite number`);
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }

//     console.log(`Number: ${i}`);
// }

//////////////////////////////////////////////////////////////////////////

// WHILE LOOP:

//We set the variable outside the while loop:

// let i = 0;

// The only thing that goes in here is the condition:

// while(i < 10){
//     // Inside the while loop is whatever we want to do:
//     console.log(`Number: ${i}`);
//     // Make sure you do the increment inside the while loop:
//     i++;
// }

//////////////////////////////////////////////////////////////////////////

// DO WHILE LOOP

// Will always run once no matter what

// let i = 0;

// do {
//     console.log(`Number: ${i}`);
//     i++;
// }
// // Then comes while what will be the condition
// while(i < 10);

// The difference is the log is ALWAYS going to run, even if the condition isnt met
// For example if you set i to 100, what obviously is less then 10, it still going to log Number 100

//////////////////////////////////////////////////////////////////////////

// RUN THROUGH ARRAYS WITH LOOPS:

// FOR loop

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
//     // or:
//     console.log(`Car Brand: ${cars[i]}`);
// }

// Same as for the WHILE loop. (just change the condition)

//////////////////////////////////////////////////////////////////////////

// forEach Loop:

// forEach takes in a callback function , a anonymous function:
// It can take in 3 different things 
// but you really only need 1
// And that is whatever you want to use as the current iteration
// Lets name it car:

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car) {
//     console.log(car);
// });


// As mentioned above it can take in 3 other things
// The second one is the index:

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car, index) {
//     console.log(`${index} : ${car}`);
// });


// And the last thing you can put in is the entire array:

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

//////////////////////////////////////////////////////////////////////////

// MAP
// Used to return a different array:

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// const users = [
//     {id: 1, name: 'john'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
// ];

// Set another variable
// Take the array of objects from above and create an array of the ids for these users:
// Map takes in a function:

// const ids = users.map(function(user){
//     // Its going to loop through and return each id inside an array
//     return user.id;
// });

// console.log(ids); // Array of the user ids

//////////////////////////////////////////////////////////////////////////

// For in loop

// Often used for objects:

const user = {
    firstName: 'Philip',
    lastName: 'Andes',
    age: 30
}

// for in loop
for(let x in user){
    //console.log(x); // This will give us just the key:
    console.log(`${x} : ${user[x]}`);
}

