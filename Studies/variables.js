/**
 *VARIABLES
 * 
 *  Variables are containers for storing data and data values. They are named and can hold things like objects, arrays, functions, expressions, statements, numbers, 
 * booleans, strings, etc. The names of variables are called "identifiers". Identifiers are case sensitive. Below we'll detail declaring and assignment, var/let/const, and 
 * hoisting:
 * 
 * 0. DECLARATION AND ASSIGNMENT
 * 
 * To declare a variable you need to choose a key word. For a standard variable you would use the keyword "var", followed by the unique name of the variable,
 * and then an = operator. Lastly, to assign a value to your variable, you would add the value that you want to store in your new named container. 
 * Typically, a person would use camelCase where the first word is lowercase and the second word is capitalized like in the example below. 
 * If there is only one word then it should be lowercase. The variable value should always end in a semicolon. If there's no value, put the semicolon behind the name of the variable.
 * These are the steps to declaring and assigning a variable:
 * 
 *  var 
 *  var uniqueName
 *  var uniqueName =
 *  var uniqueName = true; //This declared variable has an assigned value of true. If logged to the console (console.log(uniqueName)) the return will be the word "true".
 * 
 * 1. VAR, LET, CONST
 * 
 * Programs are made of values that we store in memory and statements that we use to take action on those values. We use variables(var), constants(const), and let to
 * "pin" these values to the scope in which they are created. Below I will describe var, const, and let. Then detail the three properties of var, const, and let. 
 * 
 * VAR is short for variable. Var is accessible in the global, local, and block scope. This means that variables named with the var keyword can be accessed anywhere in your 
 * code, program, or application. This is because var is hoisted when the code is run. I will explain hoisting in the next sections. Var is commonly used when learning to code
 * but, because of it's limitations, the var keyword is rarely used in real world application. Var limitations are actually that it is hoisted. When the var keyword is hoisted 
 * it means that it can be accessed globally. So if you name another variable the same name, you are only reassigning the value and the previous value will disappear. 
 * 
 * ex. var ginger = "sweet herb";
 * 
 * Let is a keyword used when you want flexibility, but not outside of your scope. Let can be reassigned, but unlike var, it cannot be hoisted. This means that when a value is 
 * assigned to Let it isn't as flexible. Let is also only available in the local or block scopes. While let can be reassigned it cannot be redeclared.
 * 
 * ex. let hatTrick = "Pull a Rabbit";
 *         hatTrick = "Long Tied Fabric Pulling"; // let can be reassigned
 * 
 * Const is short for constant. Constant does exactly as it's name implies. It cannot be reassigned or redeclared. Const is also not hoisted. It cannot be accessed in the 
 * global scope. Only in local and block scopes. However, const is good to use if you have variables and values you don't want changed. The console will throw an error if you
 * try to reassign or redeclare a const variable. You can change an element or property, but you cannot reassign the const variable.
 * 
 * ex. const noChange = "Do not reassign this variable";
 *           noChange = "Reassigned"; //this will throw an error as const variables cannot be reassigned.
 * 
 * 2. HOISTING
 * 
 * Hoisting is when an interpreter loads variable and function declarations into memory during the compile phase and then executes the code. Variables declared using the 
 * var keyword are hoisted. This means that the name of the variable is accessible before it has been initialized. However, it is only the name that is accessible, not the value.
 * Function declarations are also hoisted. This means the function body is pulled to the top of the code when it is run. So a named function can be accessed before it has a 
 * value as well. Hoisting has a few rules and I've listed them below:
 * 
 * Hoisting happens before code is executed
 * Function and var declarations are hoisted to top of the scope
 * Function declarations are hoisted over var
 * Function declarations are hoisted with their definitions
 * Values are not hoisted with var values 
 * 
 * If you want to avoid making mistakes while hoisting always declare your variables and initialize at the top of the scope. Lastly, until you know what you're doing, use
 * function declarations over expressions. 
 * Taking your time to understand variables will greatly improve the quality of your code and help you to reduce mistakes in your code. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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