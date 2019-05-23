// Function Declarations

// function greet(){
//     console.log('Hello');
// }

// greet(); // Logs Hello

//////////////////////////////////////////////////////////////////////////

// // Usually you would return something from a function:

// function greet(){    
//     return 'Hello';
// }

// // Logs nothing as above does, so we have to wrap it in a console.log():
// console.log(greet()); // Hello

//////////////////////////////////////////////////////////////////////////

// Function can take in parameters:

// lets give it a parameter of name:
// function greet(firstName){    
//     return `Hello ${firstName}`;
// }

// console.log(greet('Philip')); // Hello Philip

//////////////////////////////////////////////////////////////////////////

// you can have multiple parameters like:

// function greet(firstName, lastName){    
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet('Philip', 'Andes')); // Hello Philip Andes

//////////////////////////////////////////////////////////////////////////

// If you dont give any value it will be undefined!
// To fix this you can use the old way like:
// We have to do it for every parameter we want a default for:

// function greet(firstName, lastName){ 
//     if(typeof firstName === 'undefined'){firstName = 'Philip'}
//     if(typeof lastName === 'undefined'){lastName = 'Andes'}   
//     return `Hello ${firstName} ${lastName}`;
// }
// console.log(greet()); // Hello Philip Andes

// // If we would put something in, that would overwrite the default:
// console.log(greet('Steve', 'Smith')); // Hello Steve Smith

// The new ES6 way to do this is define it as parameter: 
// function greet(firstName = 'Philip', lastName = 'Andes'){  
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet()); // Hello Philip Andes

// // If we would put something in, that would overwrite the default:
// console.log(greet('Steve', 'Smith')); // Hello Steve Smith

//////////////////////////////////////////////////////////////////////////

// Function Expressions:

// Is basicaly putting a function as a variable assignment:
// It can be named or anonymous 
// You have a named variable and a anonymous function:
// But you COULD name it like; const square = function square(){}
// Always put a semicolon on the end because it is basicly a variable!

// const square1 = function(x){
//     return x*x;
// };

// console.log(square1(8)); // 64

// const square2 = function(x = 3){
//     return x*x;
// };

// console.log(square2()); // 9

//////////////////////////////////////////////////////////////////////////

// Immidiatley invokable function expressions - IIFEs
// Is a function you declare and run at the same time
// To do this we need to make it an expression and we can do this by putting it in paretheses:
// make it an anonymous function inside paretheses
// We also have to put paretheses on the end with a semicolon to run the log:

// (function(){
//     console.log('IIFE Ran..');
// })();

// These can also take in parameters
// (function(name){
//     console.log(`Hello ${name}`);
// })('Philip');

//////////////////////////////////////////////////////////////////////////

// Property Methods:
// When a function is put inside a object it is called a method!

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    // edit most of the times take in an id, as you need to know what you are editing, so we pass in an id as parameter:
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

// You can also define functions outside for this object:
todo.delete = function(){
    console.log('Delete todo...');
}

todo.add(); // Add todo
todo.edit(22); // Edit todo 22
todo.delete(); // Delete todo...