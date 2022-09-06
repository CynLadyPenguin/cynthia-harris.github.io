/**
 * OPERATORS
 * 
 * An operator performs an operation on single or multiple operands (data value) and produces a result. Operators come in many different types.
 * 
 * 0. ASSIGNMENT OPERATORS
 * 
 * Assignment operators are used to assign values to variables with less key strokes. Below is a list of the assignment operators and what they do:
 * 
 *      =	    Assigns right operand value to the left operand.
 *      +=	    Sums left and right operand values and assigns the result to the left operand.
 *      -=	    Subtract right operand value from the left operand value and assigns the result to the left operand.
 *      *=	    Multiply left and right operand values and assigns the result to the left operand.
 *      /=	    Divide left operand value by right operand value and assign the result to the left operand.
 *      %=	    Remainder operator. Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.
 * 
 * Example: x = 24; y = 4;  //the "=" operator assigns x the value of 24 and y the value of 4
 *          x /= y;         //using the /= operator reassigns x the value of x divided by y. So x will equal 6. (x = 24/4 = 6)
 * 
 * Example2: 
 *      array.reduce(function(acc, current){
 *      return acc += current; //the += operator here assigns acc the value of acc + current for each loop iteration. (acc = acc + current)
 *  }, 0);
 * 
 * 1. ARITHMETIC OPERATORS
 * 
 * Arithmetic operators are used to perform simple mathematic equations on numbers in your code. PEMDAS does apply when using these. Below is a list and what they do:
 * 
 *      +       Addition
 *      -       Subtration
 *      *       Multiplication
 *      **      Exponent
 *      /       Division
 *      %       Get Remainder
 *      ++      Increment
 *      --      Decrement
 * 
 * *For the below examples I will assign x = 15 and y = 3
 * 
 * Example: function subtract(x, y){
 *             return x - y; //this rewritten is return 15 - 3;
 *            } //Will subtract y from x and return the value 12
 * 
 * 
 * Example2:    x + y = 15 + 3 = 18  //x + y will return value 18
 * Example3:    x * y = 15 * 3 = 45  //x * y will return value 45
 * Example4:    x ** y = 15 ^ 3 = 3375 //x ** y will return value 3375
 * Example5:    x / y = 15 / 3 = 5   //x / y will return value 5
 * Example6:    x % y = 15 % 3 = 0   //x % y will return value 0 because 15 has no remainder when divided by 3
 * Example7:    for(var i = 0; i < array.length; i++){} //in this for loop the incremental operator tells the variable i to increment forward through the array (left to right)
 * Example8:    for(var i = array.length; i >= 0; i--){} //this for loop uses the decrement operator to tell the var i to decrement backwards through the array (right to left)
 * 
 * 2. COMPARISON OPERATORS
 * 
 * Comparison operators are used to compare two operands and return a boolean value (true or false). Here they are below with a brief description:
 * 
 *      ==      not strictly equal to compares two operands without considering their types
 *      ===     strictly equal to compares two operands while considering type as well
 *      !=      not equal to compares inequality of two operands
 *      >       greater than compares whether the operand on the left is greater than the right
 *      <       less than compares whether the operand on the left is less than the right
 *      >=      greater than or equal to compares whether the operand on the left is greater than or equal to the right
 *      <=      less than or equal to compares whether the operand on the left is less than or equal to the right
 * 
 * Example: if ("a" === "A"){
 *              return true;
 *          } else {
 *              return false;
 *          } //Will return false because the left operand is not exactly the same as the right operand 
 * 
 * Example2: console.log(4 < 12); //this will log true to the console because 4 is less than 12.
 * Example3: console.log(12 > 4); //this will log true to the console because 12 is greater than 4.
 * Example4: console.log(5 >= 6); //this will log false to the console because 5 is not greater than or equal to 6.
 * Example5: console.log(6 <= 6); //this will log true to the console because even though 6 is not less than 6, it is equal to 6.
 * Example6: if("a" != "A"){
 *              return true;
 *          } else {
 *              return false;
 *          } //this conditional should return true because "a" is not "A"
 * 
 * 
 * 3. LOGICAL OPERATORS
 * 
 * Logical operators are used to combine two or more conditions. See below:
 * 
 *      &&      Logical And is used to return a true value ONLY if the two conditions are both true. Otherwise false will return.
 *      ||      Logical Or is used to return a true value if even one othe conditions are true. It will only return false if both conditions are false.
 *      !       It reverses the boolean result of the operand (or condition). !false will return true, and !true will return false.
 * 
 * Example: if ("1" === "1" && 4 > 7){
 *              return true;
 *          } else {
 *              return false;
 *          }  //this conditional will return false because even through "1" and "1" are equal, 4 is less than 7 not greater. Both conditions must be met to return true;
 * 
 * Example2: if("1" === "1" || 4 > 7){
 *              return true;
 *          } else{
 *              return false;
 *          }   //this conditional will return true because "1" and "1" are equal. Though the second condition is false since one condition is true, it will return true
 * 
 * Example3: if("1" !== "2"){
 *              return true;
 *          } else {
 *              return false;
 *          }   //this conditional will return true because "1" is not strictly equal to "2"
 * 
 * 
 * 4. UNARY OPERATORS
 * 
 * Unary operators have only one operand. This operand comes either before or after the operator. Unary operators can not be overridden so their functionality is assured. 
 * 
 *      +       Unary + is used to try to convert the operand into a number
 *      -       Unary - is used to try to convert the operand into a number and negate it after
 *      ++      Increment adds 1 to it's operand
 *      --      Decrements subtracts 1 from it's operand
 *      !       ! converts it to a boolean value and the negates it
 *      ~       Inverts all the bits in the operand and returns a number
 *      typeof  Returns a string of which type of operand it is //ex. string, boolean, number, etc
 *      delete  Deletes a specific index of an array or a specific property of an object
 *      void    Discards a return value of an expression.
 * 
 * Example: 
 *   console.log(typeof "ducks eat bread"); //this will log "string" to the console 
 * 
 * 5. TERNARY OPERATORS
 * 
 * Ternary operators are special operators (:?) that assigns a value to a variable based on some condition. They are the short-hand for the if-else if conditional.
 * The syntax is as follows:
 * 
 * (condition a ? expression if true : expression if false)
 * 
 * Example: let age = 14;
 *          let message;
 *          age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.')
 *          console.log(message); //Will log "You cannot drive." because the age is 14.
 * 
 */