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
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    let number1 = parseFloat($("#number1").val());
    let number2 = parseFloat($("#number2").val());
    let operator = $("input:radio[name=operator]:checked").val();
    let result;
      if(operator === "add") {
        result = add(number1, number2)
      } else if(operator === "subtract") {
        result = subtract(number1, number2)
      } else if(operator === "multiply") {
        result = multiply(number1, number2)
      } else if(operator === "divide") {
        result = divide(number1, number2)
      }
    $("#output").text(result.toFixed(2));
  });
});




