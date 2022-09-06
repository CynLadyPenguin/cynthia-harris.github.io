/**
 *  FUNCTIONS
 *  
 *   Functions are blocks of code that are used to perform a task and they are invoked when they are called.
 *   
 *   0. PHASES OF USING FUNCTIONS
 *   The two phases to use functions are declaring the function and executing the function by CALLING or INVOKING it.
 * 
 * Example: 
 *   //declaring a function 
 *   function functionName(parameter){} //This is a function declaration
 *   var functionName = function(parameter){} //This is a function expression
 * Example:
 *   //calling/invoking a function
 *   function functionName(name){
 *          return name;     
 *      } //this function is designed to return the input name
 *   functionName("Cyn"); //this is an example of calling the function. We use the function name (functionName) and input our parameters. This function call will return "Cyn".
 *   
 *   1. PARAMETERS VS. ARGUMENTS
 *   The difference between parameters and arguments passed to function is that the parameter sets the type of value that the function will accept. The argument is the exact
 *   value passed into the function when it is called. 
 * 
 * Example: 
 *   function functionName(name){ //name is the parameter(it's a string representing a name) 
 *          return name;
 *      }
 *   functionName("Cyn"); // "Cyn" is the argument we're passing in when we call the function. It is the value that we want this specific function to return.
 * 
 *   2. SYNTAX
 *   The syntax for a named function looks different for function expressions and function declarations. A function expression is a function assigned to a variable and 
 *   a function declaration is a declaring of a variable.
 * 
 * Example: 
 *   //function expression
 *   var functionName = function(param){};  //<= notice the semicolon is present because it is a variable
 *   //function declaration
 *   function functionName(param){}  //<= no semicolon because this just declaring a function 
 * 
 *   3. ASSIGN FUNCTION TO VARIABLE
 *   Assignment of a function to a variable is quite easy. First you need your keyword (var, let, const) and the function name(in this case the variable name also). Then you
 *   use the function keyword and attach it to the parameter. 
 *  
 * Example: 
 *   var happyAndYouKnowIt = function(condition){
 *      if(condition === "happy"){
 *          return "clap your hands";
 *      } else {
 *          return "not happy";
 *      }
 *      }; 
 * 
 *   4. OPTIONAL INPUTS AND OUTPUTS
 *   An input in a function is also called a parameter. Parameters are completely optional, but they are also incredibly useful. When you input a parameter you can reference
 *   it in your function body. Outputs are a little different in that they can't be accessed in the function body. Instead they are the arguments that get called outside the
 *   function.
 * 
 * 
 *   5. FUNCTION SCOPES
 *   Functions are a combination scoped type. When you create a variable inside your function, you are putting it inside a LOCAL scope (the function body). When you create a
 *   conditional inside your function and declare a variable within it, you are adding that variable to a block scope. A function can also be created inside another function.
 *   The first function is called the parent function and the second is the child function. The child function has access to the parent function variables, but the parent 
 *   function cannot access the child variables. Both can access the global scope variables.
 *   
 * Example: 
 *   var witcherCharName = "Geralt";  //this variable has been declared in the global scope
 *   function nameChange(){  //this function can access variable declared in the global scope
 *      return witcherCharName = "Triss";  //this func changes the outer scope(global scope in this case) variable value to "Triss".
 *      }  //this func will not change the global scope variable value unless the variable is called with the function.
 * 
 *   6. CLOSURES
 *   A closure is the combination of a function enclosed together with references to its surrounding state called the LEXICAL environment. A closure gives you access to 
 *   an outer function's scope from an inner function. In JavaScript, closures are created every time you create a function at the time of creation.
 * 
 * Example: 
 *   function ballerShotCaller() {  //this is the parent function to the child function displayName
 *      var name = "Doug"; // name is a local variable created by ballerShotCaller. It can be accessed by the child function
 *          function displayName() {  // displayName() is the inner function or a child function
 *              console.log(name); //the inner function is holding on to the variable name from it's parent function. This is an example of closure. In this case, even when
 *  the parent function has been executed, the variable name can still be utilized because of the child function.
 *          }
 *      displayName();
 *       }
 *   ballerShotCaller();
 * 
 * 
 * 
 * 
 */