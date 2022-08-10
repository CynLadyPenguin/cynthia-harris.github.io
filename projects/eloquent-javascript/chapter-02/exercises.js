
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //declare new variable assigned to empty string
   var tri = '';
   //for loop to start i at 1, stop i at the number passed to triangles function, and increment
   for(var i = 1; i <= num; i++){
    //reassign empty string variable to itself + "#" which is symbol we want to print
     var tri = tri + "#";
     //console log the new variable
     console.log(tri)
 
   }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
   
//for loop to set conditions for index start stop and increment
for (var i = 1; i <= 15; i++) {
    //set if statement for multiples of 15
    if (i % 15 === 0) {
       console.log("fizzbuzz");
        //else if for multiples of 3
    } else if (i % 3 === 0) {
       console.log("fizz");
        //else if for multiples of 5
    } else if (i % 5 === 0) {
       console.log("buzz");
        //else for every other number
    } else {
       console.log(i);
    }
}
}
 


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //create var size that is assigned value of num(parameter)
  var size = num;
  //create our board variable assigned to empty string
  var board = "";
  //the first loop is for the first part of the board
  for (var y = 0; y < num; y++) {  
    //second loop is for the second part of the board
   for (var x = 0; x < num; x++) { 
    //if statement to assign empty space to certain parts of the board (every other space)
    if ((x + y) % 2 == 0)  
    //board assignment to empty space 
    board += " ";   
    //else statement with board assignment for the "odd" spaces 
  else     
    board += "#"; 
    } 
    //create each iteration on a new line 
   board += "\n";
  }
  //console.log our newly created board
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
