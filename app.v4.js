const color = 'red';

// instead of if else we use a switch:
// Inside a switch you want to define different cases:
// if the case matches, then do something (in this case log)
// Then we use break; to end the case 
// Now we can start more cases
// For the last else we use default:
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue!');
        break;
}

// Use a switch if you have a lot of different cases, instead of else if else if etc

// Lets evaluate the day of the week:
// First set a variable:
let day;
// We can say new Date()
// and then use the .getDay method
// This will give us the day of the week in number form, starting with 0 for sunday:
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(day);