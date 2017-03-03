# Introduction to Javascript
This is the code behind my NICAR 2017 session on learning Javascript.

####Background
* Javascript is one of the three core technologies of the World Wide Web, along with HTML and CSS.
* It requires no plugins to run.
* It’s an object-orientated programming language like Python, Ruby and PHP.
* HTML = Elements the page
* CSS = How those elements on the page look
* Javascript = Adding, removing and interacting with elements

####Browser dependency
* For the most part, Javascript requires browsers to operate.
* Browsers support Javascript differently, although it’s gotten better.

####What can you do with Javascript?
* SO MANY things!

####Pre: The set up
* This repo has two directories:
  * 01-base contains the empty files you will need to get started. Nothing has been written yet.
  * 02-final is a collection of scripts files containing the code highlighted in this walkthrough.

####1. Math, Dates
* The most basic thing you can do in Javascript is math. You can also get the current date and time easily.
```javascript
5 + 10  // returns 15
10 / 5  // returns 2
10 * 5  // returns 50
10 + 30 / 2 // returns 25
(10 + 30) / 2 // returns 20

Math.round(10.7);   // returns 11
Math.max(0, 150, 30, 20, -8, -200); // returns 150
Math.floor(4.7);    // returns 4

new Date() // This equals today's date
```

####2. Comments, console.log
* Comments allow you to write notes for your future self so you know what certain pieces of code are supposed to do.
* Console.log statements are great for debugging code. Whatever is inside of the console.log statement will be shown in the [Google Chrome web inspector](https://developer.chrome.com/devtools)
```javascript
// Example of a comment
5 + 10

// Example of a console.log
console.log(5 + 10);
```

####3. Variables
* Variables allow you store pieces of information to use later in your Javascript file.
```javascript
var number = 5 + 10; // This is a number
var string = 'All hail Javascript' // This is a string

number // returns 15
string // returns 'All hail Javascript'

number += 15
number // returns 30

string += ', the best programming language ever' // This will return 'All hail Javascript, the best programming language ever'
```

####4. Data type: Arrays
* You can group numbers and strings into one variable using arrays.
```javascript
var array_one = [10, 15, 20] // Arrays are groups of numbers

// Array indexes start with zero
// To get the first attribute in this array do the following:
array_one[0] // returns 10

array_one[1] // returns 15
array_one[2] // returns 20

var array_two = ["String one", "string two", "Guess what? This is another string"]

array_two[0] // returns "String one"
array_two[1] // returns "string two"
array_two[2] // returns "Guess what? This is another string"

// Strings and a integer in this array
var array_three = ["Prince", "Sign o' the Times", 5]

array_three[1] // returns "Sign o' the Times"
```

####5. Data type: Objects
* You can also store data using named attributes.
```javascript
var object_one = {
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
}

object_one["artist"] // returns 'Prince'
object_one["album"] // returns "Sign o' the Times"
object_one["stars"] // returns 5
```

####Objects inside an array
* You can also store objects inside arrays. You can store as many as you want.
```javascript
var array_object = [{
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
},{
  "artist": "Funkadelic",
  "album": "Cosmic Slop",
  "stars": 5
}]

array_object[0]["artist"] // returns "Prince"
array_object[1]["artist"] // returns "Funkadelic"
```

####6. If, else statement
* This will run code based on a condition or conditions. Code that doesn't fit this condition or conditions will be ignored.
```javascript
var number = 50;

if (number === 50) {
  // This code WILL run
} else {
  // This code WILL NOT not
}
```

####7. Functions
* You can also encapsulate code inside a function.
```javascript
function ourFirst() {
  // Code goes in here
}

ourFirst() // Calls the function

var number_two = 100;

function addFifty() {
  number_two // returns 100
  number_two + 50 // returns 150
}

addFifty();
```

####Functions and if, else statements
* Like most things in Javascript, you can combine different parts. Below, we combine if, else statements and functions. Also, you can name your functions what you want but it's best to describe what is happening inside the function.
```javascript
var number = 50;

function setTo150() {
  number = 150 // This will be called and number will be set to 150
}

function setTo250() {
  number = 250
}

if (number === 50) {
  setTo150() // This code WILL run
} else {
  setTo250() // This code WILL NOT not
}
```

####8. For loops
* If we want a piece a code to run many times, we can call a for loop.
```javascript
for (var num = 0; num < 10; num++) {
  // The first time through num equals 0.
  // The second time it equals 1, etc. until we get to 9.
  // Which will be the last iteration of this for loop
  num
}
```

####For loops and objects
* A very common and useful thing to do in Javascript is looop through data stored in objects. As you are looping through the data, you can 
```javascript
var array_object = [{
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
},{
  "artist": "Funkadelic",
  "album": "Cosmic Slop",
  "stars": 5
}]

// array_object.length will equal two
// Because we have two objects inside that array
// This loop will therefore run twice
for (var num = 0; num < array_object.length; num++) {
  // This will first return Prince
  // and then Funkadelic
  array_object[num]['artist']
}
```

####For loops, functions and variables
* We can also create a for loop to call a function every time it loops through. This looks like so:
```javascript
var number = 50;

function plusFive(num) {
  number += 5
}

for (var num = 0; num < 10; num++) {
  plusFive()
}

// After the for loop is done
// number will equal 100
// Because 5 was added to its initial value of 50 ten times
// Because the for loop was called ten times
number

var final_number = 50;

// Add the value of the for loop's num
// To final_number
function plusNum(num) {
  final_number += num
}

for (var num = 0; num < 10; num++) {
  // Pass the value of num (0, 1, 2, 3, etc.)
  // To our function
  plusNum(num)
}

final_number // returns 95
```

####9. Global v. local variables
* Variables declared outside of a function are considered "global" and can be used anywhere in the file. Variables declared inside a function are considered "local" and can only be used inside the function.
```javascript
// This is a global variable
var number = 100;

function ourSecond() {
  var number = 500 // Using var in front of number creates a local variable
  number // So this now returns 500
}

ourSecond()

number // This calls the global variable and it’s still 100.
number = 500 // Now the global variable is set to 500
```

####10. Returing functions
* Sometimes it's easier if a function returns a value. This means every time you call that function, that value will be returned.
```javascript
var number = 1005;

// Returns number variable minus that is passed as a parameter
function ourThird(minus_number) {
    return number - minus_number
}

ourThird(1000) // returns 5

// Note: Without the return statement within the function
// The following would error
ourThird(1000) + 100 // returns 105

// Add commas to numbers over 1000
function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  
  return val;
}

commaSeparateNumber(1000000) // Returns 1,000,000
```

####11. DOM manipulation
* jQuery is where it’s at. It was released in 2006 to make it easier to use CSS selectors to manipulate elements on the DOM.
```javascript
// Change the color of the header to red
$('h1').css({
    'color': 'red'
});

// Change the text of the header to "Your new header"
$('h1').text('Your new header')

// This changes the text and adds a class
$('h1').text('Your new header').addClass('blue');
```

####More beginner libraries
* [Underscore](http://underscorejs.org/): Better ways of manipulating objects, arrays
* [Moment](http://momentjs.com/): Handles dates better than Javascript’s default functions