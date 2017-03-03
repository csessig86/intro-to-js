// FOR LOOP
for (var num = 0; num < 10; num++) {
  // The first time through num equals 0.
  // The second time it equals 1, etc. until we get to 9.
  // Which will be the last iteration of this for loop
  console.log(num);
}

// FOR LOOP AND ARRAY INSIDE OBJECT
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
  console.log( array_object[num]['artist'] );
}

// FOR LOOP, FUNCTION AND VARIABLE
var number = 50;

function plusFive(num) {
  number += 5;
}

for (var num = 0; num < 10; num++) {
  plusFive();
}

// After the for loop is done
// number will equal 100
// Because 5 was added to its initial value of 50 ten times
// Because the for loop was called ten times
console.log(number);

var final_number = 50;

// Add the value of the for loop's num
// To final_number
function plusNum(num) {
  final_number += num;

  console.log(final_number);
}

for (var num = 0; num < 10; num++) {
  // Pass the value of num (0, 1, 2, 3, etc.)
  // To our function
  plusNum(num);
}

console.log(final_number); // returns 95