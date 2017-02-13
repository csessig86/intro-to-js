// This is how you write a comment

// Example of a console.log
console.log(5 + 10);

// Date
console.log( new Date() );

// Arrays
var array_one = [10, 15, 20];
console.log( array_one[0] );

var array_two = ["String one", "string two", "Guess what? This is another string"];
console.log( array_two[0] );

var array_three = ["Prince", "Sign o' the Times", 5];
console.log( array_three[1] );

// Objects
var object_one = {
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
};

console.log(object_one[0]);

// Objects inside of an array
var object_two = [{
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
},{
  "artist": "Funkadelic",
  "album": "Cosmic Slop",
  "stars": 5
}];

console.log( object_two[0]["artist"] );
console.log( object_two[1]["artist"] );

// If, else statement
var number = 50;

if (number === 50) {
  console.log('This code will run');
} else {
  console.log('This code will NOT run');
}

// Functions
function ourFirst() {
  console.log('This code will run');
}

ourFirst();

var number_two = 100;

function ourSecond() {
  console.log(number_two);
  console.log(number_two + 50);
}

ourSecond();