/**
 *  CONTROL FLOW
 * 
 * Control flow is how the computer reads your code from top to bottom. There are several ways to interrupt the control flow. Functions, conditionals, and loops. Since functions
 * and loops have their own studies page, I will focus on the conditionals for the control flow studies page.
 * 
 * 
 * 0. IF/ELSE IF/ELSE STATEMENTS
 * 
 * If else if conditionals are used to set the computer to comb through certain conditions and return the true one. The syntax is if (condition1){}else if(condition2){}else{}
 * In between the conditions, you would set the computer to do a certain action if the condition is true. The control flow will only look for the first true condition and stop
 * immediately after implementing the action. This is why it's important to set up conditionals in a way that creates best possible flow for your code. 
 * 
 * Example:
 if("Array" === "array"){
  console.log("array");
} else if ("Array" === "Array"){
  console.log("Array");
} else{
  console.log("false");  //Should log to the console "Array"
} 
 *  
 * 
 * 1. SWITCH STATEMENTS
 * 
 * A switch statment is very similar to an if-else if chain. The big difference is syntax and the fact that instead of looking down the chain for the first true value, the 
 * computer is looking for a specific value that it has been asked to find. An example is below. 
 * 
 * Example:
 * function getMealOfTheWeek(num) {
 switch (num) {
  case 1:
   return 'Red Beans';
  case 2:
   return 'Jambalaya';
  case 3:
   return 'Gumbo';
  case 4:
   return 'Shrimp Poboy';
  case 5:
   return 'Fried Catfish';
  case 6:
   return 'BBQ';
  case 7:
   return 'Roasted Chicken';
 }
}
console.log(getMealOfTheWeek(4)) // should log "Shrimp Poboy" to the console
 * 
 * 
 * 
 * 
 * 
 */