// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
 /*I: input is an array and a for loop O: output is the values in the array */
 for (var i = 0; i <= array.length; i++) {
  console.log(array[i]);
 } 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
/* I: input is an array and a for loop O: output is the reverse array with the conditions in the for loop */
for (var i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}  
   // YOUR CODE ABOVE HERE //
}

/** 
 *  Given an input object, loop over the object and return the object keys
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
/* I: input is the object O: output is specifically the object's keys (properties) in an array */
//set variable with value of empty array
var arr = [];
//for in loop with conditions   
  for (var key in object) {
    arr.push(key);
    }
    return arr;
   // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //for in loop 
  for (var key in object){
  //print key properties to the console
  console.log(key);
  
  } 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //variable for array
  var arr = [];
  //for in loop to loop over object keys in 
  for (var key in object) {
    //push values into the array
    arr.push(object[key]);
    //return array with values inside outside of the for in loop function
    
  }
  return arr; 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
//for in loop for object
for (var key in object) {
  //console.log the key values
  console.log(object[key]);
}  
 // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //count variable
  var count = 0;
  //for in loop 
  for (var key in object) {
    //count increment
    count++;
    //return count
  }
  return count;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //initialize variable for empty array
 var array = [];
 //set up for in loop to create variable key
 for (var key in object) {
  //push the object's key value pairs into the array we created
  array.push(object[key]); 
 }
 //create a for loop to decrement i starting with the array's length - 1 and stopping when i >= 0
 for (var i = array.length - 1; i >= 0; i--) {
  //console log the array with the conditions of i
  console.log(array[i]);
 }
 
  

  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
