// FUNCTIONS
function ourFirst() {
  // Code goes in here
  console.log('This code will run');
}

ourFirst(); // Calls the function

var number = 100;

function addFifty() {
  console.log(number); // returns 100
  number + 50 // Add 50 to our number variable
  console.log(number); // returns 150
}

addFifty(); // Calls the function

// IF, ELSE STATEMENTS AND FUNCTIONS
var number_two = 50;

function setTo150() {
  number_two = 150; // This will be called and number will be set to 150
}

function setTo250() {
  number_two = 250; // This will be called and number will be set to 250
}

if (number_two === 50) {
  setTo150(); // This code WILL run
} else {
  setTo250(); // This code WILL NOT not
}