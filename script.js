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

// Part 2: Trampolines
// TBD

// Part 3: Deferred Execution
// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
const h1El = document.createElement("h1");
document.body.appendChild(h1El);
// Write a function that takes a parameter n and adds
// a list of all prime numbers between one and n to your HTML element.
function prime(n) {
  for (let i = 0; i < n; i++) {
    if (i == 2 || i == 3 || i == 5 || i == 7) {
      h1El.textContent += i + " ";
    } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      continue;
    } else {
      h1El.textContent += i + " ";
    }
  }
  // Once complete, use the alert() method to alert the user that the calculation is finished.
  // alert only appears once all numbers have been rendered
  setTimeout(() => alert("The calculation is finished!"), 0);
}

// Run your function with n equal to 10,000.
{
  prime(10000);
}
