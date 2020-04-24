// BUSINESS LOGIC

var add = function(number1, number2) {
  return number1 + number2;
};

// USER INTERFACE

$(document).ready(function() {
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  
  alert(add(number1, number2));
});


