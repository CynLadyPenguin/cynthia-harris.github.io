/**
 *  STRING MANIPULATION
 * 
 *  String manipulation or string methods are ways in which we can work with strings. In Javascript, you can use methods on
 *  primitive values because Javascript treats them as objects when using methods and properties.
 *  
 *  0. OPERATORS
 *  There are two types of string operators, concatenate and concatenate assignment. Concatenate joins two strings together 
 *  without changing either one. Concatenate assignment is similar, but refers more specifically to appending 
 *  a string to the end of a variable and assigning the final result to that variable.
 * 
 *  Example:
 *  Concatenate:
 *  console.log("Welcome" + "Home!"); //will add both values to log "Welcome Home!"
 * 
 *  Concatenate Assignment:
 *  let str = "Welcome";
 *  str += "Home!";
 *  console.log(str); //will result in a value of "Welcome Home!"
 * 
 *  1. STRING METHODS
 *  There are various string methods that allow us to manipulate strings in a multitude of ways. String methods use 
 *  similar methods for arrays (like the .length method) to give us access to the strings properties.
 * 
 *  A. .length method
 *  The .length method can be used on a string to return the number of values the string contains
 *  Example: 
 *  let text = "mother";
 *  console.log(text.length); //will return 6 because that's how many letters are in the string
 * 
 *  B. .slice method
 *  The .slice method is used to extract part of a string. I can also return the extracted part in a new string
 *  Example:
 *  let text = "mother";
 *  console.log(text.slice(1)); //return "other" because we sliced 1 value from the front of the string
 *  
 *  C. .replace method
 *  The .replace method replaces a value in a string, typically the first match if there are multiple similar values
 *  Example:
 *  let text = "mother";
 *  console.log(text.replace("m", "br")); //will replace the "m" with a "br" to log a value of "brother"
 * 
 * 
 * 
 */

