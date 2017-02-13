# Introduction to Javascript
An introduction to Javascript, the greatest programming language ever

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

####Math, Dates
```javascript
5 + 10  // returns 15
10 / 5  // returns 2
10 * 5  // returns 50
10 + 30 / 2 // returns 25
(10 + 30) / 2 // returns 20

Math.round(10.7);   // returns 11
Math.max(0, 150, 30, 20, -8, -200); // returns 150
Math.floor(4.7);    // returns 4

new Date // This equals today's date
```

####Comments, console.log
```javascript
// Example of a comment
5 + 10

// Example of a console.log
console.log(5 + 10);
```

####Variables
```javascript
var number = 5 + 10; // This is a number
var string = 'All hail Javascript' // This is a string

number // returns 15
string // returns 'All hail Javascript'

number += 15
number // returns 30

string += ', the best programming language ever' // This will return 'All hail Javascript, the best programming language ever'
```

####Data type: Arrays
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

####Data type: Objects
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
```javascript
var object_two = [{
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
},{
  "artist": "Funkadelic",
  "album": "Cosmic Slop",
  "stars": 5
}]

object_two[0]["artist"] // returns "Prince"
object_two[1]["artist"] // returns "Funkadelic"
```

####If, else statement
```javascript
var number = 50;

if (number === 50) {
  // This code WILL run
} else {
  // This code WILL NOT not
}
```

####Functions
```javascript
function ourFirst() {
  // Code goes in here
}

ourFirst() // Calls the function

var number_two = 100;

function ourSecond() {
  number_two // returns 100
  number_two + 50 // returns 150
}


ourSecond();
```