/**
 * Copyright (c) 2020
 *
 * This program determines the average mark of 
 * students in class.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/03
 */
 
// This function calculates the average of numbers 
// in the given array.
function average(array1) {
  
  // Declaring variables:
  let sumMark = 0;
  
  // For loop to add every mark in the 2D array:
  for (let studentNumber = 0; studentNumber < 4; studentNumber++) {
    for (let markNumber = 0; markNumber < 6; markNumber++) {
        sumMark += array1[studentNumber][markNumber];
    }
  }
  // Calculating average:
  var average = sumMark / 24; 
  
  // Returning average:
  return (Math.round(average));
}

// Creating a 2D array: 
// Creating a one dimensional array:
var array1 = new Array(4);
// Loop to create a 2D array using the 1D array:
for (var counter1 = 0; counter1 < 4; counter1++) { 
    array1[counter1] = new Array(6); 
} 
  
// Loop to initialize 2D array elements. 
for (counter1 = 0;counter1 < 4 ; counter1++) {
      console.log(``);
      console.log(`Student ${counter1 + 1} marks:` );
      console.log(``);
      console.log(`(`);
    for (var counter2 = 0; counter2 < 6; counter2++) { 
        array1[counter1][counter2] = Math.floor((Math.random() * 100) + 1);
        
        console.log (array1[counter1][counter2]);
    }
    console.log(`)`);
} 

// Process / Output
// Calling average function:
const AVG = average(array1);
console.log (`The class average is: ${AVG}%`);