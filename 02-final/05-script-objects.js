// OBJECTS
var object_one = {
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
};

console.log( object_one["artist"] ); // returns 'Prince'

// OBJECTS INSIDE OF AN ARRAY
var array_object = [{
  "artist": "Prince",
  "album": "Sign o' the Times",
  "stars": 5
},{
  "artist": "Funkadelic",
  "album": "Cosmic Slop",
  "stars": 5
}];

console.log( array_object[0]["artist"] ); // returns "Prince"
console.log( array_object[1]["artist"] ); // returns "Funkadelic"