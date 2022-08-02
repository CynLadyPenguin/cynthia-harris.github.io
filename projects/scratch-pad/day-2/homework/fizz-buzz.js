// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//for loop to set conditions for index start stop and increment
for (var i = 1; i < 101; i++) {
    //set if statement for multiples of 3
    if (i % 3 === 0) {
        console.log("Fizz");
        //else if for multiples of 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
        //else if for multiples of both 3 and 5 or simply 15
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
        //else for every other number
    } else {
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}