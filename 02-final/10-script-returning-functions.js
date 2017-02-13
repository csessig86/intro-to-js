var number = 1005;

// Returns number variable minus that is passed as a parameter
function ourFifth(minus_number) {
  return number - minus_number;
}

ourFifth(1000); // returns 5

console.log( ourFifth(1000) );

// Note: Without the return statement within the function
// The following would error
ourFifth(1000) + 100; // returns 105

console.log( ourFifth(1000) + 100 );

// Add commas to numbers over 1000
function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  
  return val;
}

commaSeparateNumber(1000000); // Returns 1,000,000

console.log( commaSeparateNumber(1000000) );