// OBJECTS
var object_one = {
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
};

console.log( object_one["artist"] ); // returns 'Prince'

// OBJECTS INSIDE OF AN ARRAY
var object_two = [{
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
},{
  "artist": "Funkadelic",
  "album": "Cosmic Slop",
  "stars": 5
}];

console.log( object_two[0]["artist"] ); // returns "Prince"
console.log( object_two[1]["artist"] ); // returns "Funkadelic"