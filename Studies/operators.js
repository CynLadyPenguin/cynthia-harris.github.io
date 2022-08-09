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
 * Example: x = 24; y = 4; x /= y    //using the /= operator changes x to 6. 
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
 * Example: function subtract(x, y){
 *             return x - y;
 *            } //Will subtract y from x and return the value
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
 *          }
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
 * 5. TERNARY OPERATORS
 * 
 * Ternary operators are special operators (:?) that assigns a value to a variable based on some condition. They are the short-hand for the if-else if conditional.
 * The syntax is as follows:
 * 
 * (condition a ? expression if true : expression if false)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */