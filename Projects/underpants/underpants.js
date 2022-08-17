// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { result } = require("lodash");



var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
 _.identity = function(value){
    return value;
 }
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if (Array.isArray(value)) {
        return "array";
     } else if (value === null) {
        return "null";
     } else if(typeof value === undefined) {
        return "undefined"; 
     } else {
       return typeof(value);
     }
    }
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, num){
 //if # is not a number or blank return first element array[0]
 if (!num){
    return array[0];
    //if num is negative
} else if (num < 0){
    return [];
    //if num > array length
} else if (num > array.length){
    return array;
    //if array param is not an array
} else if (Array.isArray(array) === false){
    return [];
    //else return the first few values in the array equal to num
} else {
    return num = array.slice(0, num);
}
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, num){
    //if num is not a number return last value in the array
    if(!num){
        return array[array.length - 1];
        //if array isn't an array then return an empty array
    } else if(Array.isArray(array) === false){
        return [];
        //if the num is negative then return an empty array
    } else if(num < 0){
        return [];
        //if the num is greater than the array length then return the whole array
    } else if(num > array.length){
        return array;
        //otherwise return the values at the end of the array equal to num
    } else {
        return num = array.slice(-num);
    }
    
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //for loop to loop through array
    for(var i = 0; i < array.length; i++){
        //if looped array has the value
        if(array[i] === value){
            //return the index of that value at first occurence. otherwise return -1
            return array.indexOf(value);
        }
    }
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //for loop to loop through array
    for(var i = 0; i < array.length; i++){
        //if looped array has a certain value then return true. Return false at bottom since any other condition should return false
    if(array[i] === value){
        return true;

    }
}
return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
    //if collec is array Array.isArray
    if (Array.isArray(collection)){
        //for loop
        for (var i = 0; i < collection.length; i++){
            //pass current item in array, index, and collection into func
           func(collection[i], i, collection);
        }
    } else {     //else it is object
        //for in loop
        for (let key in collection){
            //func returns value (collection[key], key, and collection)
            func(collection[key], key, collection);
        }
    }

}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    //create new empty array to hold results
    var arr = [];
    //loop through the array
    for(var i = 0; i < array.length; i++){
        //if statement index of array value should be equal to current index
       if(array.indexOf(array[i]) === i){
        //push new looped array without duplicated into empty array
            arr.push(array[i]);
       } 
    }
    return arr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //new empty array to hold the results
    let arr = [];
    //for loop to loop over the values in the array
    for(var i = 0; i < array.length; i++){
        //if the function returns true
            if(func(array[i], i, array)){
            //push the looped array into the empty array
            arr.push(array[i]);
        }   
    }
return arr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    //new empty array
    let newArray = [];
    //loop over array
    for(var i = 0; i < array.length; i++){
              //if the function returns false
              if(func(array[i], i, array) === false){
                //push the looped array into the empty array
                newArray.push(array[i]);
            }    
    }
    return newArray;       
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    //create var for empty array and truthy and falsy 
    let truthy = [];
    let falsy = [];
    let combo = [];
    //loop through the array  
    for (var i = 0; i < array.length; i++){ 
        //if func returns true
        if(func(array[i], i, array)){
            //push values into truthy
            truthy.push(array[i]);     
            //else if func returns false  
        } else if(func(array[i], i, array) === false){
            //push those values into falsy
            falsy.push(array[i]);
        }
    }
    return combo.concat([truthy], [falsy]);
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    //create new variable to hold return
    let newArray= [];
    //if collection is an array
    if(Array.isArray(collection)){
        //iterate through the collection
        for(var i = 0; i < collection.length; i++){
            //function passes arguments of element, index, and collection
        newArray.push(func(collection[i], i, collection));
        //push collection into array  
        }         
    }else {
        //loop over object
        for(var key in collection){
            //push func obj into newArray
            newArray.push(func(collection[key], key, collection));
        }
    }
return newArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, key) {
    //return array map (function o returns the value of key)
    return array.map(o => o[key]);
  }

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
//if no func 
    if(!func){
        if(Array.isArray(collection)){
            //loop over collection
            for(var i = 0; i < collection.length; i++){
                //if no truthy values in collection then return false
                if(!collection[i]){
                    return false;
                }
            }
        } else { //it's an obj
            //loop over object
                for(var key in collection){
                    //if not values are truthy return false
                    if(!collection[key]){
                        return false;
                    }
                }
        }
        //else if there is a func
    } else {
        if(Array.isArray(collection)){
            //loop through it
            for (var i = 0; i < collection.length; i++){
                //return false if no true conditions found
                if(func(collection[i], i, collection) ===  false){
                    return false;
            

        }else { //if collection is an object
            //loop over the object
            for (var key in collection){
                //if func returns no true values, return false
                if(func(collection[key], key, collection) === false){
                     return false;
            } 
        } 
        }
    }
    }
}
   return true;
}
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //if collection is array
    if(Array.isArray(collection)){
        //loop over collection
        for (var i = 0; i < collection.length; i++){
             //call func with element(collection[i]), index(i), and collection
        if(func(collection[i], i, collection)){
            return true;
        } else {
            return false;
}
    } 
        }else { //if collection is obj
            //loop over obj
            for (var key in collection){
                //call func with current value(collection[key]), current key(key), and collection
                if(func(collection[key], key, collection)){
                    return true; 
                } else {
                    return false;
                }
        
    }
}
    
    
    //if return value of calling func is true, return true
    //if false for all elements, return false
    //if !func the return true if at least one element is truthy otherwise false
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(...obj){
    let obj1 = {}; 
   obj1 = Object.assign(obj1, ...obj);
    return obj1;
 }
    
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
