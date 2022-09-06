/**
 * 
 * LOOPS
 * 
 * Loops are iteration statements that keep running until there's nothing left to loop or the condition becomes false
 * 
 * 0. FOR LOOP 
 * Contains 3 parts; initialization, stop condition, and updation (incremental/decremental)
 * 
 * INITIALIZATION: this is the starting condition that tells the loop where to start/initiates the variable(in the below case the variable is i)
 * STOP CONDITION: this condition tells the loop when to stop by using booleans. Typically, when the condition hits a false condition, the loop will stop. 
 * UPDATION: this last part defines how to update the counting variable. It could be incremental ++ or decremental --.
 * 
 * Example: 
 * for (var i = 0; i < array.length; i++){} //loops over the length of an array
 * 
 * 
 * 1. WHILE
 *  Similar to a for loop, but better when you need unlimited looping or are unsure about the number of loops you need 
 * Example:
 * var count = 0;
 * while(count <= 10) {
 * console.log(count);
 * count++;
 * }  //will loop numbers starting at 0 and ending at 10 (inclusive)
 * 
 * 
 * 2. FOR IN
 *  Loops through the properties of objects
 * Example: 
 * for (var key in object) {
 *      console.log(object[key]); //will log object property VALUES
 * }
 * 
 * 
 * 3. LOOPING A NUMBER OF TIMES FORWARD AND BACKWARDS TO ZERO
 * 
 * The best way to loop forwards and backwards if all your looping is a number is to use a while loop. Here are two examples that show how to do this:
 * 
 * Examples Looping Forward:
 * 
 * let count = 0; //starts count at 0
 * while (count <= 15) {  //tells count to stop at 15
 * console.log(count); //console log the numbers 0 - 15
 * count++ //increment aka go forward
 * }
 * 
 * Example Looping Backwards To Zero:
 * 
 * let count = 10; //starts count at 10
 * while (count >= 0){ //tells count to stop at and include 0
 * console.log(count); //console log the numbers 10 - 0
 * count--; //decrement aka count backwards
 * }
 *  
 *  
 *  4. LOOPING OVER AN ARRAY
 * 
 * To loop over an array it's best practice to use a for loop.
 * 
 * Example Looping Forward Through Array:
 * 
 * var myArray = ["Cyn", "Law", "Mel", "Chuck"];
 * for (var i = 0; i < myArray.length; i++){ //loop starts at 0 index ("Cyn"), stops at the end of the array, and increments
 * console.log(myArray[i]); //console log the looping array
 * }
 * 
 * Example Looping Backwards Through Array:
 * 
 * var myArray = ["Cyn", "Law", "Mel", "Chuck"];
 * for (var i = myArray.length - 1; i = 0; i--){ //loop starts at the last value in myArray, stops at 0 index ("Cyn"), and decrements through the list
 * console.log(myArray[i]); //logs the array values backwards to the console
 * }
 * 
 * 5. LOOP OVER AN OBJECT
 * 
 * The best practice in looping over an object is to use the for in loop
 * 
 * Example: 
 * 
 * var person = {
 * name: "Cynthia",
 * age: 30,
 * pets: true
 * }; // objects assigned to a variable need a semicolon at the end
 * 
 * for (var key in person){ //establishes key as a variable 
 * console.log(person[key]); //will log the key values to the console ("Cynthia", 30, true)
 * }
 * 
 * 
 * 
 */