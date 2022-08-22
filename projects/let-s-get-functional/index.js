// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { count } = require('console');
const { result } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cynthia-harris.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    var males = _.filter(array, function(customer) {
        return customer.gender === "male";
    })
    return males.length;
};

var femaleCount = function(array){
    
    var females = _.reduce(array, function(accumulator, customer){
        if(customer.gender === "female"){
            accumulator += 1;
        }
        return accumulator; 
    }, 0);        
   return females;  
};

var oldestCustomer = function(array){
    var highestAge = 0;
    var oldestName = _.reduce(array, function(accumulator, customer) {
      if(customer.age > highestAge) {
        accumulator = customer.name;
        highestAge = customer.age;       
      }
      return accumulator;
    },'')
return oldestName;
};
    

var youngestCustomer = function(array){
    
    let youngest = _.reduce(array, function(acc, customer){
        if(customer.age < acc.age){
            acc = customer;
        }
      return acc;                  
    });
  return youngest.name;  
};



var averageBalance = function(array){
    let total = 0;
    let sum = 0;
    let balance = _.filter(array, function(customer){
        for(var i = 0; i < customer.balance.length; i++){
            sum += i;
            total = sum / 8;
        }
        return total; 
    })
    return balance;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
