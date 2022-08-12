/**
 * DATA TYPES
 * 
 * Data types are built in data structures that are assigned. There are different types like primitive, complex, truthy, and falsey.
 * 
 * 0. NUMBER
 * A number is a data types that represents an integer or digit 0-9 or even negative numbers. They can be assigned to variables, used for arithmetic, or accessed using 
 * various methods. 
 * Example: var myNum = 10284;
 *  
 * 
 * 1. STRING
 * A string is a series of letters, characters, or numbers that is between two quotes. " " or ' ' can be used to signify a string. A backtick can also be used for certain
 * coding situations (` `). They can be inside functions, objects, and arrays. There can be separate strings or just one string. Strings are very flexible data types.
 * Example: var myString = "Dancing Wolves"; 
 * 
 * 
 * 2. BOOLEAN
 * A boolean is a value of true or false. Typically, they are returned from block scoped statements like if statements or switch statements, but they can be assigned to 
 * a variable or returned from other coding statements.
 * 
 * 
 * 3. ARRAY
 * An array is a type of complex data types that is denoted by brackets []. Arrays can hold all types of data types, including objects and functions. 
 * Example: var myArray = ["string", false, 10, {object: myObject}];
 * 
 * 
 * 4. OBJECT
 * An object is a complex data type similar to an array. The big difference between the two is that objects have keys and value pairs. 
 * Example: var myObject = {
 *              name: "Cynthia",
 *              age: 30
 *              } 
 * 
 * 
 * 5. FUNCTION
 * A function is the third type of complex data type. A function is incredibly versatile. They can be found inside other functions, assigned to variables, inside arrays and 
 * objects. They a used to perform a specific action in the code. 
 * Example: function addName(str){
 *                  return myObject.name;             
 *                  } // this function is designed to return the value "Cynthia"
 * 
 * 
 * 6. UNDEFINED
 * When a variable hasn't been assigned a value, it has the value of "undefined". Undefined really just means that the variable exists, but has no value associated with it.
 * Example: var name;
 * console.log(name); //will return "undefined" because the variable name has no value assigned to it.  
 * 
 * 
 * 7. NULL
 * Null is similar to undefined, but the big difference is that when "null" appears it means that what you're looking for doesn't exist. Null === nothing. 
 * Example: var name;
 *  console.log(age); //should return null/nothing because age hasn't been created or assigned. 
 * 
 * 8. NAN
 * Nan or Not a Number is a way of staying that some value isn't a number. You may try to do arithmetic by multiplying y * 5 and run into NAN because y is not a number.
 * 
 * 
 * 9. INFINITY AND -INFINITY
 * Infinity represents the value of infinity. Essentially, a never-ending count of numbers. -Infinity is similar except instead of forward from zero, it goes backwards into 
 * negative numbers.
 * Example: console.log(Math.log(0)); //should log -infinity.
 * 
 * 
 * 10. SIMPLE VS. COMPLEX DATA TYPES 
 * Simple data types are also called primitive data types. They are an uncomplicated piece of data like numbers, booleans, null, undefined, strings, infinity, NAN.
 * Complex data types are called that because they hold other data types. Functions, arrays, and objects are examples of complex data types. 
 * 
 * 
 * 11. COPY BY VALUE/COPY BY REFERENCE
 * In Javascript, there are different ways to pass values to a function. Depending on the data type, simple or complex, they get passed in different ways.
 * 
 * 
 * 
 */