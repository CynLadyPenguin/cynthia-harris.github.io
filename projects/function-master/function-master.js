//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var array = [];
for(var key in object){
    array.push(object[key]);
}
return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var array = [];
    var str = "";
    for (var key in object){
    array.push(key);
    str = array.join(" ");
}
return str;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];
    str = "";
    for (var key in object){
        if (typeof object[key] === 'string'){
            array.push(object[key]);
        }
       str = array.join(" ");
}
return str;   
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array";
     } else if (collection === null) {
        return "null";
     } else if(typeof collection === undefined) {
        return "undefined";
     }  else if (typeof collection === "object") {
       return "object";
     }
    }
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

  return string.charAt(0).toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var split = string.split(" ");
    for (var i = 0; i < split.length; i++){
      split[i] = split[i][0].toUpperCase() + split[i].substr(1);
    
    var capitals = split.join(" ");
    }
    return capitals;
  }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name;
    return "Welcome " + name.charAt(0).toUpperCase() + name.slice(1) + "!"; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  var name = object.name;
  var species = object.species;
  message = `${name.charAt(0).toUpperCase() + name.slice(1)} is a ${species.charAt(0).toUpperCase() + species.slice(1)}`;
  
return message;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (object && object.noises) { // check that object and object.noises exists
  
  if (Array.isArray(object.noises)) { // check that object.noises is an Array
      //since this array exists if it has value we'll check that
      if (object.noises.length > 0) { // check length of array is > 0
          return object.noises.join(" ");
      } else {
       
  }
  }
}
return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
for (var i = 0; i < string.length; i++){
  if (string.includes(word)){
    return true;
  } else {
    return false;
  }
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  if(object.friends){
  if(Array.isArray(object.friends)){
    object.friends.push(name);
  }
  }
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//if obj.friends is an array and has property friends
if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
  //loop through obj.friends
  for(var i = 0; i < object.friends.length; i++) {
    //if name is in obj.friends then return true
    if(name === object.friends[i]) {
      return true;  
    }
  }    
} 
return false;  
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//create empty array to return results into
var nonfriends = []; 
//iterate over the array looking for friends
for (var i = 0; i < array.length; i++) {
  //new var to hold the friends names that appear in the array
    var friends = array[i].friends; 
    //new variable to establish that the new friend shouldn't exist
    var isFriend = false;
    //if the name from the the array isn't the name we're testing for 
    if  (array[i].name !== name) { 
      //iterate over the friends
        for (var e = 0; e < friends.length; e++) { 
          //if friends with second looping conditions is a friend
            if (friends[e] === name) { 
                isFriend = true; //record that they have the person as a friend
            } 
        }
        //
        if (!isFriend) nonfriends.push(array[i].name); 
    } else {
        isFriend = true; 
    }
}
return nonfriends;
 
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var key in object){
  for(var i = 0; i < array.length; i++){
    if (array[i] === key){
      delete object[key];
      delete key;
    }
  }
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  var arr = [];
        
  // Loop through array values
  for(i = 0; i < array.length; i++){
    //if arr.indexof(array[i]) === -1)
      if(arr.indexOf(array[i]) === -1) {
        //push looped array into new empty array variable
          arr.push(array[i]);
      }
  }
  return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}