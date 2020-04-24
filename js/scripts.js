// BUSINESS LOGIC

let add = function(number1, number2) {
  return number1 + number2;
};

let subtract = function(number1, number2) {
  return number1 - number2;
};

let multiply = function(number1, number2) {
  return number1 * number2;
};

let divide = function(number1, number2) {
  return number1 / number2;
};


// USER INTERFACE

$(document).ready(function() {
  // ADD
  $("#add").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#add1").val());
    let number2 = parseInt($("#add2").val());
    let result = add(number1, number2);
    $("#output").text(result);
  });
  // SUBTRACT
  $("#subtract").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#subtract1").val());
    let number2 = parseInt($("#subtract2").val());
    let result = subtract(number1, number2);
    $("#output").text(result);
  });
  // MULTIPLY
  $("#multiply").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#multiply1").val());
    let number2 = parseInt($("#multiply2").val());
    let result = multiply(number1, number2);
    $("#output").text(result);
  });
  // DIVIDE
  $("#divide").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#divide1").val());
    let number2 = parseInt($("#divide2").val());
    let result = divide(number1, number2);
    $("#output").text(result);
  });
});


