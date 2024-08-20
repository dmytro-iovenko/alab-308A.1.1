/** Part 1: Stack Overflow */

// Declare a global counter variable.
let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function recurse() {
  // increments the variable
  counter++;
  // calls the function recursively
  recurse();
}

// Surround the initial function call in a try/catch block.
try {
  recurse();
} catch (err) {
  // Within the catch, log the error and the value of the counter variable.
  console.log(err, counter);
}
