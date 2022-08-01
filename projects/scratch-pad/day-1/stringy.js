// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
  /* I: function should input a string
  O: output should be the length of the inputed string
  C: / E: /
  */
 //return str.length
 return string.length;  
// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
/*I: input a string O: return lowercase string C: / E: / */
//return string.toLowerCase
return string.toLowerCase();
   // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
/*I: input a string with lowercases O: output should be a string with lowercase C: / E: / */
//return string.toUpperCase();
return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
/* I: input a string O: output a string that has been dash-cased C: / E: / */
//let string = "";

return string.prototype.replace(/[" "]/g, "-")
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
/* I: function should input a string and a single character to be compared using boolean values true or false possibly using comparison operators and .startsWith
* O: function should output a boolean value true or false that ignores case sensitivity */
//set if value for uppercase matching
if (string.toUpperCase().startsWith(char.toUpperCase())) {
    return true;
}else if (string.toLowerCase().startsWith(char.toLowerCase())) {
    return true;
    //set return for all other conditions
}else {
    return false;
}
  console.log(beginsWith("Street", "s"));
 // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
/* I: function should input a string and a single character to compare using boolean values and if statement and .endsWith
*O: Output should be a boolean value of true or false */
//set up if statement to lay conditions 
if (string.toUpperCase().endsWith(char.toUpperCase())) {
    return true;
    //else if statement for lowercase conditions
}else if (string.toLowerCase().endsWith(char.toLowerCase())) {
    return true;
}else {
    return false;
}
   // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: input should be two strings and a + operator O: Output should be one long string
//return string1 + string2
return stringOne + stringTwo;
   // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
//I: input is separate strings that we want to join O: output is one long string
//should use .join array function given to the array name (no space in .join strings for this example)
return args.join("");
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: input is two strings we want to compare the length of and we'll need a comparison operator O: output is the longer of the two strings
//if statement to set conditions (we don't need parenthesis behind .length)
if (stringOne.length > stringTwo.length) {
    //return the first string
    return stringOne;
    //second string should return if stringone is shorter than stringtwo
}else {
    return stringTwo;
}
   // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: input is the two strings and we'll definitely need an if else if conditional O: output is the values 1 if first is higher in alphabet, -1 if lower, 0 if equal
//if statement for greater than
if (stringOne < stringTwo) {
    return 1;
    //else if for less than
} else if (stringOne > stringTwo) {
    return -1;
}else {
    return 0;
}

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
